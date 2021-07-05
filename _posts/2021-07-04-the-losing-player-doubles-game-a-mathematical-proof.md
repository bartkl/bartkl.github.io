---
layout: post
author: Bart
title: "The Losing Player Doubles Game: A Mathematical Proof"
---

# Poker, but not quite
Back in the day I used to play poker with friends, and at some point when two people were left playing each other, I wondered:

> What would happen if both players keep going all-in, and each round the person with the least value in chips wins?

For example, let's say Alice has \\(100\\) value in chips, and Bob has \((200\\). That means Alice wins, and doubles to \\(200\)), meaning Bob loses \\(100\\) to her leaving him with \\(100\\). This time, Bob is the poor man, meaning he doubles his points to \\(200\\), and Alice ends up with \\(100\\). I think it's clear what's going on here: Alice and Bob will keep going back and forth this way, i.e. the game will be stuck in this cycle, meaning it will not end.

Immediately, this example proves that not all games end. The interesting question that remains is:

> Under what conditions does the game end?

This is the question I will be answering in this article.

# Defining _The Losing Player Doubles Game_
Games need names, so I've decided to dub this game _The Losing Player Doubles Game_, since every round the player who is behind is the one who wins that round.

First, let's define the game more rigorously. In that process, let's also ditch the poker terminology.

### Definition 1 (WIP)

* There are exactly two players at all time in the game.
* There is a fixed amount of points in the game which never changes, only the distribution across the players changes (it's a zero-sum game).
* The game ends if and only if one player has \\(0\\) points.
* Every round, the player with the least amount of points receives that amount of points from the other player.

Okay, here our definition becomes problematic. What if the two players have the same amount of points? Then the expression "the player with the least amount of points" is ambiguous. Now, although we have to solve this, it's a really trivial detail we cannot be bothered with. Ultimately, this game is no fun anyways, so who wins doesn't matter. What we're interested in is whether the game ends. Note that whenever either of the players has \\(0\\) points, the previous situation necessarily was that both of them had an equal amount of points. This means that we know that whenever the two players get an equal amount of points, the game will end, and we can discard the ambiguity involved in _how_ it will end (i.e.: _who_ will win).

So, here is our revised definition:

### Definition 1
* There are exactly two players at all time in the game.
* There is a fixed amount of points in the game which never changes, only the distribution across the players changes (it's a zero-sum game).
* The game ends if and only if both players have the same amount of points.
* Every round, the player with the least amount of points receives that amount of points from the other player.

This time, either both players have an equal amount of points, meaning the game will end, or one has less points than the other, meaning we have well-defined behavior for advancing our game.

Of course this definition is not very formal, but it suffices. Later, when we use mathematical techniques to proof some of our assertions, we will definitely formalize more.

# Playing around with the game
This single example is enough to prove that not all games end, which


Test.

I am thinking, \\(x^2\\), but also:

\\[x^2\\]

![My helpful screenshot](/assets/img/a.png)
