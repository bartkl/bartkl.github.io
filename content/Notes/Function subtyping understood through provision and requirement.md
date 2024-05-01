---
date: 2022-08-29
draft: true
tags:
    - programming
---

Say you have the following function:

```haskell
f :: Cat -> Food
```

Now, consider this one:

```haskell
g :: Animal -> Candy
```

Note that `Cat < Animal` and `Candy < Food`, where `<` denotes a subtype-of relationship.

Question: is the type of `f` a subtype of that of `g`? That means, can I substitute `g` wherever I find `f`?

Yes, because functions are covariant in their range, and contravariant in their domain, which is exactly the situation we're in.

Alright, but how about a more comprehensible look on that:
- `Animal` is wider than `Cat`, so `g` requires less than `f` does, i.e.: since `Cat < Animal`, it knows how to deal animals
- `Candy` is narrower than `Food`, so `g` provides less, so any result will be compatible in the usual sense. [TODO: phrase better]

TODO:
- Check if the examples are alright
- Understand the variance language better
- Simply improve the writing in general
- Mention the two edge cases that can make things a little more clear:
	- If `Cat` remains `Cat` or `Food` remains `Food` it still works, since types are subtypes of themselves. Yet, it really helpes with the require/provide language.
