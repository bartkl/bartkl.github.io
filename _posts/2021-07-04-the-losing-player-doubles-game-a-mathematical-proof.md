---
layout: post
author: Bart
title: "The Losing Player Doubles Game: A Mathematical Proof"
---

## Poker, but not quite
Back in the day I used to play poker with friends, and at some point when two people were left playing each other, I wondered:

> What would happen if both players keep going all-in, and each round the person with the least value in chips wins?

For example, let's say Alice has \\(100\\) value in chips, and Bob has \\(200\\). That means Alice wins, and doubles to \\(200\\), meaning Bob loses \\(100\\) to her leaving him with \\(100\\). This time, Bob is the poor man, meaning he doubles his points to \\(200\\), and Alice ends up with \\(100\\). I think it's clear what's going on here: Alice and Bob will keep going back and forth this way, i.e. the game will be stuck in this cycle, meaning it will not end.

Immediately, this example proves:

> Not all games end.

The interesting question that remains is:

> Under what conditions does the game end?

This is the question I will be answering in this article.

## Defining _The Losing Player Doubles Game_
Games need names, so I've decided to dub this game _The Losing Player Doubles Game_, since every round the player who is behind is the one who wins that round.

First, let's define the game more rigorously. In that process, let's also ditch the poker terminology.

### Definition: _The Losing Player Double Game_ (WIP)

* There are exactly two players at all time in the game.
* There is a fixed amount of points in the game which never changes, only the distribution among the players changes (it's a zero-sum game).
* The game ends if and only if one player has \\(0\\) points.
* Every round, the player with the least amount of points receives that amount of points from the other player.

The astute reader might realize there's a problem with our definition: what if the two players have the same amount of points? Then the expression "the player with the least amount of points" is ambiguous. Now, although we have to solve this, it's a really trivial detail we cannot be bothered with. Ultimately, this game is no fun anyways, so who wins doesn't matter. What we're interested in is whether the game ends. Let's fix this.

Note that whenever either of the players has \\(0\\) points, this means that in the previous round both of them must have had an equal amount of points. Make sure you convince yourself of the fact that this is _necessarily_ the case. What follows from this is the knowledge that whenever (and only then) the two players get an equal amount of points, the game will end, and we can discard the ambiguity involved in _how_ it will end (i.e.: _who_ will win).

So, here is our revised definition (only the amiguous rule changed, but I'm repeating everything for the sake of explicity):

### Definition: _The Losing Player Double Game_
* There are exactly two players at all time in the game.
* There is a fixed amount of points in the game which never changes, only the distribution across the players changes (it's a zero-sum game).
* The game ends if and only if both players have the same amount of points.
* Every round, the player with the least amount of points receives that amount of points from the other player.

This time, either both players have an equal amount of points, meaning the game will end, or one has less points than the other, meaning we have well-defined behavior for advancing our game.

Of course this definition is not very formal, but it suffices. Later, when we use mathematical techniques to proof some of our assertions, we will definitely formalize more.

## Playing around with the game
Whenever you're dealing with a problem like this, it's a good idea to fiddle around with some examples. Earlier, we saw an example of a scenario which led to a game that never ends. If you like to, try out examples of your own. Which games end and which ones don't? Can you identify any properties or patterns? Here's an example of a game that does end: Alice has \\(300\\) points, and Bob has \\(500\\). In the next round they'll have \\(600\\) and \\(200\\) points respectively, and then both will have \\(400\\) points, and thus the game ends.

So yeah, I told you exploring examples is a good idea, and it is, but I doubt it will lead you to the discovery of the answer to this problem. If you can prove me otherwise though, make sure to share that with me!

We need to approach this more methodically.

## Getting methodical
Given a certain round in which the game has not ended yet, one player has fewer points and therefore will double his amount of points. There's no other way the game can possibly proceed, so the game is clearly deterministic.

There's also something to be said about the reverse direction: any round is the successor of exactly two possible preceding rounds, each of which corresponds to a different player having doubled his points since. For example, if Alice has \\(200\\) points, and Bob has \\(400\\), there's two possible rounds that could have preceded this one, one in which Alice was the one who doubled her points, in which case she had \\(100\\) points and Bob had \\(500\\), and one in which Bob was the one who doubled his points, meaning he had \\(200\\) while Alice had \\(400\\).

Due to these deterministic properties, you can do something very clever:

> Start with a game you know will end, and from there, backtrack all possible preceding rounds.

Let's explore.

### The binary tree
A nice way to visually represent the possible rounds in games that (eventually) end, is a _binary tree_. Before I elaborate on that any further though, let's first make some more observations.

Firstly, what really matters in these games is not the actual amounts of points the players have, or even the absolute total. What matters are the ratios of point distribution among players. For example, whether both players have \\(100\\) points or just \\(1\\) is irrelevant. In both cases there's a \\(1:1\\) ratio, which is what matters.

Looking at it this way, we can normalize all possible ratios such that all common divisors are factored out (essentially diving by the _greatest common divisor_), leaving a single representative pair. The pair \\((1, 3)\\) will represent the ratios \\(1:3\\), \\(20:60\\), and so on. From now on, I will refer to this as _coprime normalization_.

So, any round can now be represented by a single pair of numbers which are coprime (i.e. don't share any divisors). It's time to build our tree.

Recall that backtracking from a given round leads to exactly two preceding rounds that could have happened. This is why the binary tree is a perfect visualization. On row \\(0\\), we have the root node \\((1,1)\\), which means the game has ended. On row \\(1\\), there's two child nodes which each represent a possible preceding round. And so forth.

Here's part of the beginning of the tree:

![Binary tree](/assets/img/bintree.png)

Some observations and conventions:

- The tree is mirrored over the \\(y\\) axis, and we can consider only one half without losing any generality, since it's irrelevant for our purposes whether Alice has (for example) \\(100\\) points and Bob has \\(200\\), or vice versa.
- The rows are numbered, starting with row \\(0\\). This will come in handy later.
- For any node \\((x, y)\\) we will say that the \\(x\\) parts belong to player \\(1\\), and the other \\(y\\) parts to player \\(2\\).
- Since we're backtracking, row \\(n + 1\\) is the round _before_ row \\(n\\).

It might not be immediately obvious how to derive the pairs in the tree. Let's do an example to demonstrate how you can go about it. In row \\(1\\) we have the node \\((1, 3)\\). Let's determine the possible preceding rounds. First, note that \\((1, 3)\\) is equivalent with a ratio of \\(2:6\\). This will make the arithmetic easier. So, either:

1. Player \\(1\\) doubled his points in the last round, in which case they used to have \\(1\\) part, meaning player \\(2\\) must have lost one part, meaning they had \\(7\\) parts. So, this corresponds to the node \\((1, 7)\\). Note that these numbers are coprime, and don't need further normalization.
2. Player \\(2\\) doubled his points, so they had \\(3\\) parts, and player \\(1\\) must have had \\(5\\) parts. This corresponds with the node \\((5, 3)\\).

Now that we have a neat visualization, it's time to solve the puzzle.

## The solution
The binary tree we just built enables us to come up with a hypothesis quite easily.

The root node \\((1, 1)\\) represents (and is the only node doing so) an ending game. A game ends, if and only if, the points ratio corresponds to this node.

Then, from there, we can indefinitely carry on the recursive generation of  _all_ possible preceding ratios between the players' points. This means that by definition, this tree covers the entire set of (coprime normalized) ratios (and nothing else). Put differently:

> If the players have points with a ratio corresponding to some node in this tree, the game will ultimately end. Reversely, if the ratio does not correspond to any node on the tree, the game will not end.

Okay, that's nice, but: given some point counts for both players, how can I tell whether the ratio corresponds with a node on the tree?

### The pattern
To answer that question, it would help if we could identify some property that holds for every node in the tree. And we're in luck, because it's not very hard to see:

> Given some row \\(n\\) of the tree, it holds that for every node \\((x, y)\\) in that row, we have \\(x + y = 2^{n + 1}\\).

This makes sense, because row \\(0\\) clearly has a sum of \\(2\\), and since the coprime normalization we apply requires us to multiply by \\(2\\) every row we advance (see the example calculation earlier, with the \\(2:6\\) ratio), this sum gets multipied by \\(2\\) for the next row.

Anyways, how does this help us? It doesn't immediately. However, if its reverse also holds, we would obtain a satisfactory result:

> Conjecture: for any coprime \\(x, y\\):
> $$(x, y) \text{ is a node in row } n \Leftrightarrow x + y = 2^{n + 1}$$

For those unfamiliar with the double arrow symbol: it means "if and only if", basically signifying logical equivalence between both sides, i.e. the left hand side implies the right hand side and vice versa.

If this is indeed true, then we can determine whether our game ends by doing the following:

1. Take the point counts of each player and divide them by the greatest common divisor. This way, all common divisors are factored out, and you end up with a coprime normalized pair.
2. Add the obtained coprime numbers.
    - If they add up to some power of \\(2\\), this game will end.
    - Otherwise, the game will not end.

It is now time to get to actually proving the conjecture. Warning: things are about to get very mathematical.

## The formalization and proof
This is the part where the article gets quite technical. If you have no background in mathematics, it's probably hard to follow along. Definitely feel free to try though. You can get a head start by reading up on _proof by mathematical induction_, which is a technique I'll be using to perform the proof. Also, you may not be familiar with some of the notation, in which case I suggest you read up on _predicate logic_.

First, let's reiterate our conjecture to prove:

### The proposed solution
Given coprime \\(x, y > 0\\):

$$(x, y) \text{ is a node in row } n \Leftrightarrow x + y = 2^{n + 1}$$

### Proof.
We will use mathematical induction on \\(n\\).

For \\(n = 0\\), there's only one node, namely \\((1, 1)\\). Therefore, what needs to be proved is:

$$(1, 1) \text{ is a node in row } 0 \Leftrightarrow 1 + 1 = 2^{0 + 1}$$

This is trivially true.

Now, assume the hypothesis holds for all \\(n\\). We will now show that then, it also holds for \\(n + 1\\).

Let \\(p, q > 0\\) be coprimes. Without loss of generality, we can assume \\(p < q\\). Let's apply the rules to advance the game to the next round. Afterwards, we'll expose a relationship between the sums of the parts of subsequent rounds:

$$\begin{aligned}
p' &= 2p \\
q' &= q - p
\end{aligned}$$

Giving us the ratio \\(p':q'\\) in the next round. Now note that since \\(p, q\\) are coprime, they are odd, and therefore \\(p', q'\\) are even. So we can safely divide by \\(2\\):

$$\begin{aligned}
p'' &= p \\
q'' &= \frac{q - p}{2}
\end{aligned}$$

This pair \\(p'', q''\\) is coprime, making it the normalized form representing the next round. I will prove this right now using a proof from contradiction.

Suppose \\(p'', q''\\) are not coprime. Then:

$$\begin{aligned}
\exists{r}[r &| p'' \wedge r | q''] \\
r | p &\wedge r \Big| \frac{q - p}{2} \\
r | p &\wedge 2r | q - p
\end{aligned}$$

So, for some \\(k, l\\):

$$\begin{aligned}
p &= k \cdot r \\
q - p &= l \cdot 2r
q &= r(k + 2l)
r &| q
\end{aligned}$$

So, we have a common divisor \\(r\\) between \(p\\) and \\(q\\), which contradicts the fact that they are coprime. Therefore, our assumption that \\(p'', q''\\) are not coprime must be wrong, and the conclusion is that they are coprime.

Finally, we can then relate the sums of \\(p, q\\) and \\(p'', q''\\):

$$\begin{aligned}
p'' + q'' &= p + \frac{q - p}{2} \\
2(p'' + q'') &= 2p + q - p \\
2(p'' + q'') &= p + q
\end{aligned}$$

We will use this in the proof ahead. Let's go back to proving the case \\(n + 1\\). There's two directions of implication we need to prove.

#### (\\(\Rightarrow\\))
If \\((p, q)\\) is a node on row \\(n + 1\\), then \\((p'', q'')\\) is a node on row \\(n\\). Using the induction assumption, that means \\(p'' + q'' = 2^{n + 1}\\). But we know \\(p + q = 2(p'' + q'')\\), so it follows that \\(p + q = 2^{n + 2}\\). This implication holds.

#### (\\(\Leftarrow\\))
Suppose \\(p + q = 2^{n + 2}\\). Since \\(p'' + q'' = \frac{1}{2} \cdot (p + q)\\), this means \\(p'' + q'' = 2^{n + 1}\\). By the induction hypothesis, this means \\((p'', q'')\\) is in row \\(n\\). But that means the predecessor \\((p, q)\\) is in row \\(n + 1\\). So, this implication holds as well.

Since both directions of the implication hold, we have proven the case for \\(n + 1\\), thereby concluding this proof successfully.

## Critical notes
- The tree is not formally defined. This could be done by a recursive definition.
- Some expressions are vague, like "... we have \\((x, y)\\) as a node on the tree." This is intimately related to the lack of a formal definition of the tree mentioned just now.
