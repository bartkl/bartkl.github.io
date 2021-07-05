---
layout: post
author: Bart
title: "The Losing Player Doubles Game: A Mathematical Proof"
---

# Poker, but not quite
Back in the day I used to play poker with friends, and at some point when two people were left playing each other, I wondered:

> What would happen if both players keep going all-in, and each round the person with the least value in chips wins?

For example, let's say Alice has \\(100\\) value in chips, and Bob has \((200\\). That means Alice wins, and doubles to \\(200\\)), meaning Bob loses \\(100\\) to her leaving him with \\(100\\). This time, Bob is the poor man, meaning he doubles his points to \\(200\\), and Alice ends up with \\(100\\). I think it's clear what's going on here: Alice and Bob will keep going back and forth this way, i.e. the game will be stuck in this cycle, meaning it will not end.

Immediately, this example proves:

> Not all games end.

The interesting question that remains is:

> Under what conditions does the game end?

This is the question I will be answering in this article.

# Defining _The Losing Player Doubles Game_
Games need names, so I've decided to dub this game _The Losing Player Doubles Game_, since every round the player who is behind is the one who wins that round.

First, let's define the game more rigorously. In that process, let's also ditch the poker terminology.

### Definition: _The Losing Player Double Game_ (WIP)

* There are exactly two players at all time in the game.
* There is a fixed amount of points in the game which never changes, only the distribution across the players changes (it's a zero-sum game).
* The game ends if and only if one player has \\(0\\) points.
* Every round, the player with the least amount of points receives that amount of points from the other player.

Okay, here our definition becomes problematic. What if the two players have the same amount of points? Then the expression "the player with the least amount of points" is ambiguous. Now, although we have to solve this, it's a really trivial detail we cannot be bothered with. Ultimately, this game is no fun anyways, so who wins doesn't matter. What we're interested in is whether the game ends. Let's fix this.

Note that whenever either of the players has \\(0\\) points, this means that in the previous round both of them must have had an equal amount of points. Make sure you convince yourself of the fact that this is _necessarily_ the case. What follows from this is the knowledge that whenever (and only then) the two players get an equal amount of points, the game will end, and we can discard the ambiguity involved in _how_ it will end (i.e.: _who_ will win).

So, here is our revised definition:

### Definition: _The Losing Player Double Game_
* There are exactly two players at all time in the game.
* There is a fixed amount of points in the game which never changes, only the distribution across the players changes (it's a zero-sum game).
* The game ends if and only if both players have the same amount of points.
* Every round, the player with the least amount of points receives that amount of points from the other player.

This time, either both players have an equal amount of points, meaning the game will end, or one has less points than the other, meaning we have well-defined behavior for advancing our game.

Of course this definition is not very formal, but it suffices. Later, when we use mathematical techniques to proof some of our assertions, we will definitely formalize more.

# Playing around with the game
Whenever you're dealing with a problem like this, it's a good idea to fiddle around with some examples. Earlier, we saw an example of a scenario which led to a game that never ends. If you like to, try out examples of your own. Which games end and which ones don't? Can you identify any properties or patterns? Here's an example of a game that does end: Alice has \\(300\\) points, and Bob has \\(500\\). In the next round they'll have \\(600\\) and \\(200\\) points respectively, and then both will have \\(400\\) points, and thus the game ends.

So yeah, I told you exploring examples as a good idea, and it is, but I doubt it will lead you to the discovery of the answer to this problem. If you can prove me otherwise though, make sure to share that with me!

We need to approach this more methodically.

# Getting methodical
Recall that I said this game is deterministic. Let's look more closely at what this entails.

Given a certain round in which the game has not ended yet, one player has fewer points and therefore will double his amount of points. There's no other way the game can possibly proceed, so this is clearly deterministic.

There's also something to be said about the reverse direction: any round is the successor of exactly two possible preceding rounds, each of which corresponds to a different player having doubled his points since. For example, if Alice has \\(200\\) points, and Bob has \\(400\\), there's two possible rounds that could have preceded this one, one in which Alice was the one who doubled her points, in which case she had \\(100\\) points and Bob had \\(500\\), and one in which Bob was the one who doubled his points, meaning he had \\(200\\) while Alice had \\(400\\).

Due to these deterministic properties, you can do something very clever:

> Start with a game you know will end, and from there, backtrack all possible preceding rounds.

Let's get to work.

## The binary tree
A nice way to visually represent the possible rounds in games that (eventually) end, is a _binary tree_. Before I elaborate on that any further though, let's first make some more observations.

Firstly, what really matters in these games is not the actual amounts of points the players have, or even the absolute total. What matters are the ratios of point distribution among players. For example, whether both players have \\(100\\) points or just \\(1\\) is irrelevant. In both cases there's a \((1:1\\) ratio, which is what matters.

Looking at it this way, we can normalize all possible ratios such that all common divisors are factored out, leaving a single representative pair. The pair \\(1, 3\\) will represent the ratios \\(1:3\\), \\(20:60\\), and so on.

So, any round can now be represented by a single pair of numbers. It's time to build our tree.

Recall that backtracking from a given round leads to exactly two preceding rounds that could have happened. This is why the binary tree is a perfect visualization. On row \\(0\\), we have the root node \\(1,1\\), which means the game has ended. On row \\(1\\), there's two child nodes which each represent a possible preceding round. And so forth.

Here's part of the beginning of the tree:




![My helpful screenshot](/assets/img/a.png)
