---
layout: page
title: Regex Reading List
permalink: /regex/
---

# Regular Expressions Reading List

Regex is one of main interests. Over the years I've been learning about them, I've accumulated some valuable materials - mostly related to perdormance and engine internals.


* Mastering Regular Expressions, 3rd Edition, Jefferey Friedl, 2009
* [Regex101 - online regex tester and debugger](https://regex101.com/)
* [Test app - original](https://github.com/kszubrycht/regex-with-vuejs) thanks to [Kamil Szubrycht](https://github.com/kszubrycht)
* [OWASP on ReDoS](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)
* [Maciek Rząsa: Performance of Regular Expressions](https://medium.com/textmaster-engineering/performance-of-regular-expressions-81371f569698)
* [Katafrakt: Regular expression how do they work?](http://katafrakt.me/2016/07/06/regular-expressions/)
* [The true power of regular expressions](http://nikic.github.io/2012/06/15/The-true-power-of-regular-expressions.html)
* [FlashText algorithm vs regular epxressions for keyword matching](https://www.analyticsvidhya.com/blog/2017/11/flashtext-a-library-faster-than-regular-expressions/)
* [Sam Safron: Debugging 100% CPU usage in production Ruby on Rails systems](https://samsaffron.com/archive/2018/01/18/my-production-ruby-on-rails-cpu-is-at-100-now-what
)
* [Jeff Atwood: Regex performance](https://blog.codinghorror.com/regex-performance/)
* [Mimicking atomic groups in JS regex](http://blog.stevenlevithan.com/archives/mimic-atomic-groups)
* [RexEgg - Regex Tutorial](http://www.rexegg.com), especially:
  * [Explosive quantifiers](http://www.rexegg.com/regex-explosive-quantifiers.html)
  * [Mastering quantifiers](http://www.rexegg.com/regex-quantifiers.html)
* [regular-expressions.info](https://www.regular-expressions.info):
  * [Possesive quantifiers](https://www.regular-expressions.info/possessive.html)
  * [Catastrophic backtracking](https://www.regular-expressions.info/catastrophic.html)
  * [Regex engine internals](https://www.regular-expressions.info/engine.html)
* Russ Cox regex series:
  * [Regular Expression Matching Can Be Simple And Fast](https://swtch.com/~rsc/regexp/regexp1.html)
  * [Regular Expression Matching: the Virtual Machine Approach](https://swtch.com/~rsc/regexp/regexp2.html)
  * [Regular Expression Matching in the Wild](https://swtch.com/~rsc/regexp/regexp3.html)
  * [Regular Expression Matching with a Trigram Index](https://swtch.com/~rsc/regexp/regexp4.html)
* Loggly:
  * [Five invaluable techniques to improve regex performance](https://www.loggly.com/blog/five-invaluable-techniques-to-improve-regex-performance/)
  * [Regexes bad, better, best](https://www.loggly.com/blog/regexes-the-bad-better-best/)
* ReDoS cases:
  * [Sam Safron: Debugging 100% CPU usage in production Ruby on Rails systems](https://samsaffron.com/archive/2018/01/18/my-production-ruby-on-rails-cpu-is-at-100-now-what)
  * [CloudFlare postmortem (2019)](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/)
  * [StackOverflow postmortem (2016)](https://stackstatus.net/post/147710624694/outage-postmortem-july-20-2016)
  * [Rack (Ruby web server interface)](https://github.com/rack/rack/pull/242)
  * [Atom editor (2016)](http://davidvgalbraith.com/how-i-fixed-atom/)
* ReDoS research:
  * [Virginia Tech Blogpost](https://medium.com/bugbountywriteup/introduction-987fdc4c7b0)
  * [Virginia Tech Paper](http://people.cs.vt.edu/~davisjam/downloads/publications/DavisCoghlanServantLee-EcosystemREDOS-ESECFSE18.pdf)
  * [SoK: Demystifying Regular Expression Denial of Service](https://arxiv.org/html/2406.11618v1) ReDoS survey
* Optimisations
  * [Using Selective Memoization to Defeat Regular Expression Denial of Service (ReDoS)](https://ieeexplore.ieee.org/document/9519427)
  * [Ruby Core: memoisation that makes many regex polynomial instead of exponential](https://bugs.ruby-lang.org/issues/19104)
  * V8 (JavaScript) optimisations: [1](https://v8.dev/blog/regexp-tier-up), [2](https://v8.dev/blog/speeding-up-regular-expressions)
  * [.Net 7 Regex improvements](https://devblogs.microsoft.com/dotnet/regular-expression-improvements-in-dotnet-7/)
  * [.Net 5 Regex performance improvements](devblogs.microsoft.com/dotnet/regex-performance-improvements-in-net-5/)
  * [V8 (JavaScript) Regex series](https://v8.dev/blog/tags/regexp) esp
    * [Improving V8 regular expressions](https://v8.dev/blog/regexp-tier-up)
    * [An additional non-backtracking regex engine](https://v8.dev/blog/non-backtracking-regexp)  
* Internals
  * [.Net Symbolic regex matcher](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/02/SRM_tacas19.pdf)
  * [Regular Expressions and Onigmo, the Ruby regular expression engine](https://hparker.svbtle.com/regular-expressions-and-onigmo)
  * [Rust Regex development](https://burntsushi.net/regex-internals/)
  * [Very ambitious persional project - building an own regex engine, described step-by-step](https://www.abstractsyntaxseed.com/blog/regex-engine/introduction)
  * [Maciej Rząsa (yours truly), talk: Magical journey through regex engine internals](https://www.youtube.com/watch?v=ZM2h7GxdKL8) 
* Code
  * [Onigmo - Ruby library to debug regex engine internals (parsing and compiling](https://github.com/kddnewton/onigmo)
  * [Python `re` - regular expression engine source code - in python](https://github.com/python/cpython/tree/main/Lib/re)
  * [Ruby regexec.c - the bulk of Ruby's regex engine - in C](https://github.com/ruby/ruby/blob/master/regexec.c)
