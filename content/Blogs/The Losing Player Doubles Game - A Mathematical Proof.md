---
title: "The Loser Doubles Game: A Mathematical Proof"
date: 2021-07-04
tags:
    - math
---

> [!attention]
> The formal proof contains an error. It is indicated by a footnote and still needs to be resolved. Thanks to my friend Robbert Hardin for spotting the mistake.

## Poker, Although Not Quite
When I was younger, I used to play poker with friends. At some point, probably when two finalists were taking turns going all-in, I stumbled upon an interesting question.

> [!Description]
> Consider the situation of a two-player game where both players keep going all-in. Suppose now that every round the playe with the fewest amount of chips wins. Does this game risk going on indefinitely and if so, under what conditions is this the case?

>[!example]-
> Suppose Alice has $100$ chips, and Bob has $200$. Since Alice has less, she wins, so she doubles her amount of chips to $200$, meaning Bob loses $100$ chips, leaving him with $100$. This time, Bob is the one with less chips, so now it is he who doubles his chips to $200$, and Alice ends up with $100$. I think it's clear what's going on here: Alice and Bob will keep going back and forth this way, i.e. this game will never terminate.

Immediately, this example proves that **some games do not terminate**.

The interesting question that remains and that I will be answering in this article is: 

**Under what conditions do games terminate?**

## Defining the Game
Of course this derived deterministic mini-game has little to do with poker (but it is a great excuse for some fun mathematical problem solving). Games need names, so I've decided to dub this game _The Loser Doubles_, since every round the player who is behind (the "loser") is the one who wins that round and then doubles their amount of chips.

First, let's define the game more rigorously, ditching the poker terminology as well.

* There are exactly two players in this game. At no point during the game does this change.
* Each player has points, the amount of which will vary per round.
* The total amount of points in the game is fixed (never changes), only the distribution among the players changes (it's a zero-sum game).
* Each round the player with the least amount of points wins that round, meaning they receive that amount of points from the other player.
* The game terminates if and only if one player has $0$ points.

The astute reader might realize there's a problem with our definition: what if the players have the same amount of points? Then it would be ambiguous who wins. Luckily for us this game is so boring that nobody cares who wins. We only care under which conditions the game terminates.

Note that whenever either of the players has $0$ points, this means that in the previous round both of them must have had an equal amount of points. Make sure you convince yourself of the fact that this is _necessarily_ the case. What follows from this is the knowledge that whenever (and only then) the two players get an equal amount of points, the game will terminate, and we can discard the ambiguity involved in _how_ it will end (i.e. _who_ will win).

Let's amend the game's termination condition to escape the aforementioned ambiguity:

* The game terminates if and only if both players have the same amount of points.

Now, either both players have an equal amount of points, in which case the game will terminate, or one player has less points than the other, in which case we can advance our game another round. This time it seems we have well-defined behavior for our game.

This definition is informal, but it suffices.

## Playing Around
Whenever you're dealing with a problem like this, it's a good idea to fiddle around with some examples. Earlier, we saw an example of a scenario which led to a game that never terminates. If you like to, try out examples of your own: which games terminate and which ones don't? Can you identify any properties or patterns? Here's an example of a game that does terminate: Alice has $300$ points, and Bob has $500$. In the next round they'll have $600$ and $200$ points respectively, and then both will have $400$ points, and thus the game terminates.

So yeah, I told you exploring examples is a good idea, and it is, but I doubt it will lead you to the discovery of the answer to this problem. If you can prove me otherwise though, make sure to share that with me!

We need to approach this more methodically.

## Getting Methodical
As is quite clear, this game is deterministic: each round the game can advance in precisely one way. Or, to put in another way, any round is the successor of exactly two possible preceding rounds, each of which corresponds to a different player having doubled their points since. For example, if Alice has $200$ points, and Bob has $400$, there's two possible rounds that could have preceded this one, one in which Alice was the one who doubled her points, in which case she had $100$ points and Bob had $500$, and one in which Bob was the one who doubled his points, meaning he had $200$ while Alice had $400$.

Due to these deterministic properties, you can do something clever:

> [!note] Start with a game you know will terminate, and from there, backtrack all possible preceding rounds.

Let's explore.

### The Binary Tree
A nice way to visually represent the possible rounds in games that (eventually) terminate is a _binary tree_. Before I elaborate on that any further though, let's first make some more observations.

Firstly, what really matters in these games is not the actual amounts of points the players have, or even the absolute total. What matters are the ratios of the point distribution among the players. For example, whether both players have $100$ points or just $1$ is irrelevant. In both cases there's a $1:1$ ratio, which is what matters.

Looking at it this way, we can normalize all possible ratios by dividing by all common divisors (essentially diving by the greatest common divisor), leaving a single representative pair. The pair $(1, 3)$ will represent the ratios $1:3$, $20:60$, and so on.

So, any round can now be represented by a single pair of numbers which are coprime (i.e. don't share any divisors). It's time to build our tree.

Recall that backtracking from a given round leads to exactly two preceding rounds that could have happened. This is why the binary tree is a perfect visualization. On row $0$, we have the root node $(1,1)$, which means the game has terminated. On row $1$, there's two child nodes which each represent a possible preceding round. And so forth.

Here's part of the beginning of the tree:

![[../Attachments/The Losing Player Doubles Game - A Mathematical Proof 2024-04-22 20.17.35.excalidraw]]
Some observations and conventions:

- Every row represents a round in the game. The rows are numbered, starting with row $0$.
- Note: since we're backtracking, row $n + 1$ is the round _before_ row $n$.
- Every node in a row represents a possible state of the game, i.e. a distribution of points among the two players for a specific round.
- For any node $(x, y)$ we will say that the $x$ parts belong to player $1$, and the other $y$ parts to player $2$.
- The tree is mirrored over the $y$ axis, since we can consider only one half without losing any generality. It's irrelevant for our purposes whether Alice has (for example) $100$ points and Bob has $200$, or vice versa.

It might not be immediately obvious how to derive the pairs in the tree. Let's work out an example to demonstrate how you can go about this.

In row $1$ we have the node $(1, 3)$. Let's determine the possible preceding rounds. First, note that $(1, 3)$ is equivalent with a ratio of $2:6$. This will make the arithmetic easier. So, either:

1. Player $1$ doubled their points in the last round, in which case they used to have $1$ part, meaning player $2$ must have lost one part, meaning they had $7$ parts. So, this corresponds to the node $(1, 7)$. Note that these numbers are coprime, and don't need further normalization.
2. Player $2$ doubled their points, so they had $3$ parts, and player $1$ must have had $5$ parts. This corresponds with the node $(5, 3)$.

Now that we have a neat visualization, it's time to solve the puzzle.

## The Solution
The binary tree we just constructed enables us to come up with a hypothesis quite easily.

The root node $(1, 1)$ represents (and is the only node doing so) a terminating game. A game terminates if and only if the points ratio corresponds to this node. Then, from there, we can indefinitely carry on the recursive generation of _all_ possible preceding ratios between the players' points. This means that by definition, this tree covers the entire set of coprime normalized ratios (and nothing else). Put differently: if the players have points with a ratio corresponding to some node in this tree, the game will ultimately end. Reversely, if the ratio does not correspond to any node on the tree, the game will not end.

All that remains then is the question: **how can I tell whether the ratio of certain game state corresponds with a node on the tree?**

### The Pattern
To answer that question, it would help if we could identify some property that holds for every node in the tree. And we're in luck, because it's not very hard to see:

> [!note]
> Given some row $n$ of the tree, it holds that for every node $(x, y)$ in that row, we have $x + y = 2^{n + 1}$.

This makes sense, because row $0$ clearly has a sum of $2$, and since the coprime normalization we apply requires us to multiply by $2$ every row we advance (see the example calculation earlier, with the $2:6$ ratio), this sum gets multipied by $2$ for the next row.

Anyways, how does this help us? It doesn't immediately. However, if its reverse also holds, we would obtain a satisfactory result:

> [!conjecture]
> For any coprime $x, y$:
> $$(x, y) \text{ is a node in row } n \Leftrightarrow x + y = 2^{n + 1}$$

For those unfamiliar with the double arrow symbol: it means "if and only if", basically signifying logical equivalence between both sides, i.e. the left hand side implies the right hand side and vice versa.

If this is indeed true, then we can determine whether our game terminates as follows:

1. Take the point counts of each player and divide them by the greatest common divisor. This way, all common divisors are factored out, and you end up with a coprime normalized pair.
2. Add the obtained coprime numbers.
    - If they add up to some power of $2$, this game will end.
    - Otherwise, the game will not end.

It is now time to get to actually proving the conjecture.

### The Formal Proof
This is the part where the article gets quite technical. If you have no background in mathematics, it's probably hard to follow along. Definitely feel free to try though.

First, let's reiterate our conjecture:

#### The Proposed Solution
Given coprime $x, y > 0$:

$$(x, y) \text{ is a node in row } n \Leftrightarrow x + y = 2^{n + 1}$$

#### Proof
We will use mathematical induction on $n$.

For $n = 0$, there's only one node, namely $(1, 1)$. Therefore, what needs to be proved is:

$$(1, 1) \text{ is a node in row } 0 \Leftrightarrow 1 + 1 = 2^{0 + 1}$$

This is trivially true.

Then, assume the hypothesis holds for all $n$. We will now show that then, it also holds for $n + 1$.

Let $p, q > 0$ be coprimes. Without loss of generality, we can assume $p < q$. Let's apply the rules to advance the game to the next round. Afterwards, we'll expose a relationship between the sums of the parts of subsequent rounds:

$$
\begin{aligned}
p' &= 2p \\
q' &= q - p
\end{aligned}
$$

Giving us the ratio $p':q'$ in the next round. Now note that since $p, q$ are coprime, they are odd[^1], and therefore $p', q'$ are even. So we can safely divide by $2$:

[^1]: This is an error in the proof. However, I've been told by friends that using the Euclidean algorithm it can be shown quite straightforwardly that $p''$ and $q''$ are coprime.

$$
\begin{aligned}
p'' &= p \\
q'' &= \frac{q - p}{2}
\end{aligned}
$$

First let's prove that the pair $p'', q''$ is coprime. I will prove this using a proof from contradiction.

Suppose $p'', q''$ are not coprime. Then:

$$
\begin{aligned}
\exists{r}[r &| p'' \wedge r | q''] \\
r | p &\wedge r \Big| \frac{q - p}{2} \\
r | p &\wedge 2r | q - p
\end{aligned}
$$

So, for some $k, l$:

$$
\begin{aligned}
p &= k \cdot r \\
q - p &= l \cdot 2r \\
q &= r(k + 2l) \\
r &| q
\end{aligned}
$$

We have a common divisor $r$ between $p$ and $q$, which contradicts the fact that they are coprime. Therefore, our assumption that $p'', q''$ are not coprime must be wrong, and the conclusion is that they are coprime.

Since $p''$ and $q''$ are coprime, they are the coprime normalized representative pair for the row we just advanced. As promised earlier, let us finally proceed and relate the sums of $p, q$ and $p'', q''$:

$$
\begin{aligned}
p'' + q'' &= p + \frac{q - p}{2} \\
2(p'' + q'') &= 2p + q - p \\
2(p'' + q'') &= p + q
\end{aligned}
$$

We will use this in the proof ahead. Let's go back to proving the case $n + 1$. There's two directions of implication we need to prove.

##### ($\Rightarrow$)
If $(p, q)$ is a node on row $n + 1$, then $(p'', q'')$ is a node on row $n$. Using the induction assumption, that means $p'' + q'' = 2^{n + 1}$. But we know $p + q = 2(p'' + q'')$, so it follows that $p + q = 2^{n + 2}$. This implication holds.

##### ($\Leftarrow$)
Suppose $p + q = 2^{n + 2}$. Since $p'' + q'' = \frac{1}{2} \cdot (p + q)$, this means $p'' + q'' = 2^{n + 1}$. By the induction hypothesis, this means $(p'', q'')$ is in row $n$. But that means the predecessor $(p, q)$ is in row $n + 1$. So, this implication holds as well.

Since both directions of the implication hold, we have proven the case for $n + 1$, thereby concluding this proof successfully.
