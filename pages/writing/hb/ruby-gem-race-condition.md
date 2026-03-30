---
layout: post
title: One about debugging a lazy race condition
permalink: /hb/lazy-race-condition
tags: ["debugging", "Ruby"]
---

It was a debugging session under severe pressure. There was a (virtual) mob with (virtual) pitchforks at our (virtual) door yelling, “Remove the gem! Remove the gem!”. They had a point -- the gem (Ruby library) we had added was crashing CI e2e test runs a few times per day. It slowed down our fellow engineers in a dozen teams, so they just wanted to remove the obstacle. But we relied on this gem, so we wanted to keep it. It's not what you think -- we weren't just selfish.

<img src='/assets/img/hb/crowd.png' />

You can’t really blame our colleagues  for quickly jumping to the conclusion that the [gem ArLazyPreload](https://github.com/DmitryTsepelev/ar_lazy_preload) should be removed. After all, it was the source of the error that made the tests flaky. Its name was repeated at least 8 times in the stack trace, and it had been added recently.

```
Did you mean?  association_needs_preload?
  Rails Exception:, #<NoMethodError: undefined method `association_tree'
    for #<ArLazyPreload::Contexts::AutoPreloadContext:0x000055f9902b13f0>
  Did you mean?  association_needs_preload?>
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/associated_context_builder.rb:44:
    in `child_association_tree'
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/associated_context_builder.rb:35:
    in `perform'
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/associated_context_builder.rb:12:
    in `prepare'
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/contexts/base_context.rb:43:
    in `perform_preloading'
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/contexts/base_context.rb:28:
    in `try_preload_lazily'
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/active_record/base.rb:12:
    in `try_preload_lazily'
  gems/ar_lazy_preload-0.3.1/lib/ar_lazy_preload/active_record/association.rb:7:
    in `load_target'
  gems/activerecord-6.0.3.2/lib/active_record/associations/association.rb:65:
    in `reload'
```

We were almost sure that  it wasn’t the gem to blame, simply because we had done due diligence before adding it. It sounds like confirmation bias -- and maybe it was -- because the build issue was intermittent. Still, it _seemed_ to us that the flakiness wasn’t correlated with this change.

Looking high and low to prove our hypothesis, at one moment we even thought we had discovered a bug in the Rails framework. But it wasn’t Rails that was to blame. The issue was hidden in a distant region of our own code.

We started digging in an obvious place -- the exact line of the [gem code where the error was raised](https://github.com/DmitryTsepelev/ar_lazy_preload/blob/44ba76ecb36fa4016e22ee1a4c8ef201d9f9f800/lib/ar_lazy_preload/associated_context_builder.rb#L48-L53):
```ruby
# ar_lazy_preload/lib/ar_lazy_preload/associated_context_builder.rb
class AssociatedContextBuilder
  def child_association_tree
    return nil if ArLazyPreload.config.auto_preload?

    AssociationTreeBuilder.new(parent_context.association_tree).subtree_for(association_name)
  end
end
```

The `parent_context` was `nil`, so calling `association_tree` raised an error. The problem was that the config indicated we should never reach this line:
```ruby
ArLazyPreload.configure do |config|
  config.auto_preload = true
  # ...
end
```


We were puzzled. How could it be that the error was raised from a line that is never executed? The issue looked familiar to me, yet it seemed unexpected. It looked like a race condition. It was unexpected -- we rarely see them in Ruby apps. Yet it was plausible -- the issue happened in the e2e test suite that ran our app on the Puma server in multi-threaded mode.

I found some supporting evidence. There was a code path that was changing the configuration:

```ruby
# Enables ArLazyPreload requests with operations field
class ArLazyPreloadInstrumenter
  class << self
    DEFAULT_AUTO_PRELOAD = ArLazyPreload.config.auto_preload

    def before_request(query)
      ArLazyPreload.config.auto_preload = true if has_operations_field?(query)
    end

    def after_request(_query)
      ArLazyPreload.config.auto_preload = DEFAULT_AUTO_PRELOAD
    end
  end
end
```

The evidence was pretty weak, though. We were changing `auto_preload` to true, which was fine. Still, we _were_ mutating shared state, and change coincided with the first flaky failures. I needed stronger evidence to justify changing this code. So I started experimenting with threads.

At first, I ran two concurrent threads -- one flipping the config, another one trying to access database associations. Nothing happened. The next idea was to simulate two threads in a simple script -- interleave flipping the config and the production code that loaded the association. This time, I reproduced the issue:
```ruby
ArLazyPreload.config.auto_preload = true
                                            preload = ArLazyPreload.config.auto_preload
manager = Manager.find(123)
                                            ArLazyPreload.config.auto_preload = !preload
puts manager.user.to_s # loading association
                                            ArLazyPreload.config.auto_preload = preload

```
What was the problem?

We were running e2e tests on multi-threaded Puma, sending many requests in parallel to load a page. When a request that flipped the config ran at the same time as a request that accessed an association, the application entered an inconsistent state and raised exceptions.

The root cause was that we were changing mutable config shared between threads -- a config that was supposed to be set once before the gem was initialised and then never updated. This was a piece of evidence strong enough to justify removing the class that was changing the config and asking the authors to provide a more robust implementation of this feature.

What was interesting to me was that the fix actually started with a wild guess (“what if it’s a race condition?”) -- a hypothesis that connected all the dots. Instead of implementing a costly (and uncertain) fix, I prepared a cheap experiment that gave me confidence and justified the more expensive changes. It paid off to stick to our guns amid the growing mob pressure. The issue wasn't in the gem itself, but in the assumption that the configuration could be mutated.
