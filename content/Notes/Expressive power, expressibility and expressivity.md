---
date: 2022-12-07
tags:
    - semantic-web
---

Basically, there's a difference between what a language is capable (or not) of expressing (*expressibility*), and how easy it is to concisely express (certain) things in a language.

Or, as described by the user `Stephen C` on Stack Overflow: 
> expressiveness and expressibility are different things. For instance any algorithm you can write in Java is _expressible_ as a Turing machine, but the language of Turing machines cannot be described as _expressive_, compared to Java. – Stephen C Feb 28, 2013 at 0:02

And, Wikipedia:
> The term _expressive power_ may be used with a range of meaning. It may mean a measure of the ideas expressible in that language:
> -   regardless of ease (_theoretical expressivity_)
> -   concisely and readily (_practical expressivity_)

## Examples
### RDF
The semantics of RDF are very limited, so it has limited expressibility: there's a lot one cannot express in it. Note that a lot can be represented in it, which is precisely what it's for. But without semantics superimposed on it by languages like RDFS or OWL, it's very limited in that regard.

### RDFS vs OWL
RDFS provides semantics which allow you to express yourself. It allows you to say high-level, conceptual things like "`a` is of type `A`", and "`b` is a subproperty of `c`".

OWL provides a lot more semantics, so you can express more in it, and hence it has greater expressibility.

### Clojure vs C
Higher-order functions such as `zip`, `map` and `reduce` allow for greater *expressivity*, not expressibiity. Anything you can express in Clojure, can be expressed in `C` as well, but given its narrower semantics/vocabulary, it takes more effort to express it.

### Resources
* https://stackoverflow.com/questions/15070602/what-are-the-limits-to-expressability-of-rdf-owl-etc
* https://en.wikipedia.org/wiki/Expressive_power_(computer_science)
