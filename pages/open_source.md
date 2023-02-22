---
layout: page
title: Open Source
permalink: /open_source/
weight: 4
remote_projects:
---
# Open Source Contributions

## [Chewy](https://github.com/toptal/chewy/)

{% include tag.html tag='#Ruby' %} {% include tag.html tag='#Elasticsearch' %}

High-level [Elasticsearch](https://www.elastic.co/elasticsearch/) Ruby framework based on the official elasticsearch-ruby client.

* [Replace parent-child mapping with a join field](https://github.com/toptal/chewy/pull/760)
* [Document string vs keyword/text for ES6](https://github.com/toptal/chewy/pull/741)
* [toptal/chewy](https://github.com/toptal/chewy) [Allow configuration of Active Job queue name](https://github.com/toptal/chewy/pull/707)
* [[CI] Added Ruby 2.7 to CircleCI config](https://github.com/toptal/chewy/pull/718)
* [[CI] Setup CI on CircleCI](https://github.com/toptal/chewy/pull/711)

## [FakeFS](https://github.com/fakefs/fakefs)
{% include tag.html tag='#Ruby' %}

I noticed that I couldn't use one of my favourite debugging features in [Pry](https://github.com/pry/pry) when [FakeFS](https://github.com/fakefs/fakefs) is active: `show-source` raised errors.
When I fixed this issue for Pry, I noticed that I can use a similar technique for [IRB](https://github.com/ruby/irb). It was a bit more difficult because I had to unmock `Kernel#open`.
* [Fix binding.irb inside FakeFS](https://github.com/fakefs/fakefs/pull/488)
* [Assign FS constants to make them available in Pry](https://github.com/fakefs/fakefs/pull/485)

I noticed two other low-hanging fruit and delivered two more fixes for reported issues:
* [Do not expand globs in FileSystem.find](https://github.com/fakefs/fakefs/pull/487)
* [Make Dir.open with block compatible with ::Dir](https://github.com/fakefs/fakefs/pull/486)

## [Ruby](https://www.ruby-lang.org/)
{% include tag.html tag='#Ruby' %}

I delivered a couple of micro-contributions to Ruby language itself and its standard library:

* [ruby/ruby] [[DOC] Change formatting in the exec docs](https://github.com/ruby/ruby/pull/6762)
* [ruby/stringio] [[DOC] Add note about #to_io and remove mentions of the bin/ dir from the README](https://github.com/ruby/stringio/pull/39)
* [ruby/optparse] [Don't treat empty string as an option description](https://github.com/ruby/optparse/pull/40)
* [ruby/bigdecimal] [[DOC] Document precision=0 and ndigits=0 for converting from Float](https://github.com/ruby/bigdecimal/pull/235)
* [ruby/bigdecimal] [[DOC] Improve documentation of BigDecimal#sign](https://github.com/ruby/bigdecimal/pull/234)
* [ruby/bigdecimal] [Handle correctly #reminder with infinity](https://github.com/ruby/bigdecimal/pull/243)

### Other

* [puma/puma] [Do not raise error on CONNECT](https://github.com/puma/puma/pull/2932) - improved handling of unsupported HTTP methods in Ruby application server {% include tag.html tag='#Ruby' %}
* [rspec/rspec-expectations] [Handle MockExpectationError in aggregate_failures](https://github.com/rspec/rspec-expectations/pull/1392) - fixed a critical error that prevent RSpec (a Ruby testing library) from printing the test results correctly {% include tag.html tag='#Ruby' %}
* [palkan/n_plus_one_control] [Do not count a query matching .ignore pattern](https://github.com/palkan/n_plus_one_control/pull/47) {% include tag.html tag='#Ruby' %}
* [cockroachdb/cockroach] [cli: handle utf in show tables](https://github.com/cockroachdb/cockroach/pull/56630) {% include tag.html tag='#Golang' %}
* [gottfrois/rails_event_store_mongoid] [Order events by creation date not id.](https://github.com/gottfrois/rails_event_store_mongoid/pull/2) {% include tag.html tag='#Ruby' %} {% include tag.html tag='#MongoDB' %}
* [KnapsackPro/knapsack] [Use Process.clock_gettime to measure track execution time](https://github.com/KnapsackPro/knapsack/pull/100) {% include tag.html tag='#Ruby' %}
