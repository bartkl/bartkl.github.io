---
date: 07-09-2024
title: "Which is Bigger: 56^57 or 57^56?"
tags:
    - math
---

# Question
I came across [this question on Quora](https://www.quora.com/Which-number-is-bigger-56-57-or-57-56):

> Which number is bigger, 56^(57) or 57^(56)?

# Exploring the Likely Answer
To come up with a hypothesis about which number is bigger, let's explore this relationship with some other numbers and get a feel:

$$
\begin{aligned}
1^2 &< 2^1 \\
2^3 &< 3^2 \\
3^4 &> 4^3 \\
4^5 &> 5^4
\end{aligned}
$$
It seems that continuing from this point, the number with the larger exponent will remain bigger than the one with the larger base.

> [!hypothesis]
> $56^{57} > 57^{56}$

# Informal Proof
I thought it'd be fun to take on this problem where I try to use as little as math knowledge as possible.

Let's try out some rewriting and see if that gives us any ideas. I'll be trying to simplify, so perhaps get rid of the $57$'s favoring $56$'s.

Let's look at $56^{57}$ first:

$$
\begin{aligned}
56^{57} \\
&= 56 \cdot 56^{56} \\
&= 56^{56} + 56^{56} + ... + 56^{56}
\end{aligned}
$$

That's $56$ terms equal to $56^{56}$. Perhaps that'll be useful later. Maybe I can expand the other number in a similar way and compare the terms.

Now let's focus on $57^{56}$:

$$
\begin{aligned}
57^{56} \\
&= (56 + 1)^{56} \\
&= (56 + 1) \cdot (56 + 1) \cdot ... \cdot (56 + 1)
\end{aligned}
$$

Things feel simpler with only $56$'s around, but it's far from clear how to compare these two expansions. How can we further rewrite this such that it becomes a sum, so we can start trying to compare terms between this number's expansion and the other one's?

Well, we could simply start performing the multiplications. This way we ultimately end up with a sum as we desire. But it's not quite straightforward what that result would be. Maybe we can do something clever.

Let's see if we can estimate what this sum would look like in the worst case (maximally). If we can then show that the sum of solely $56^{56}$'s is larger than that sum, it must also be larger than the actual sum.

Looking at all the $(56 + 1)$ being multiplied, the biggest term is $56^{56}$. This one results from the multiplcation of all $56$'s. Note there's not enough $56$'s for obtaining a $56^{57}$ or beyond.

From there, all other multiplications will yield all sorts of possible multiples of powers of $56$. Without doing any calculations, we can assume the worst case (yielding the biggest possible sum) and estimate that every exponent smaller than $56$ will occur:

$$
\begin{aligned}
(56 + 1)^{56} \cdot (56 + 1)^{56} \cdot ... \cdot (56 + 1)^{56} &= \\
56^{56} + c_{55} \cdot 56^{55} + c_{54} \cdot 56^{54} + ... + c_{1} \cdot 56 + 1
\end{aligned}
$$
Note that since we're not calculating anything, we don't know the values of most of the $c_i$ constants, with the exception of the first and last terms. However, we do know that these constants are all smaller than $56$.

> [!explanation]-
> Why is it the case that for all $i$: $c_i < 56$?
> To see why this has to be the case, let's suppose we have some constant that's larger than $56$, e.g. for some $j$ we have $c_j = 57$.
> Then:
> $$
> \begin{aligned}
> 57 \cdot 56^j =& \\
> (56 + 1) \cdot 56^j =& \\
> 56 \cdot 56^j + 56^j =& \\
> 56^{j+1} + 56^j&
> \end{aligned}
> $$
> As you can see, such a constant cannot exist since it "spills over" and is therefore not a constant of just that term.

Finally, note that there are $57$ terms in this sum. If we treat the last two terms as a single one (i.e. $c_2 \cdot 56 + 1$), then we end up with $56$ terms just like with the first number we expanded. This means we can compare the size of the terms pairwise!

From left to right, let's compare the terms:

$$
\begin{aligned}
56^{56} =& 56^{56} \\
c_{55} \cdot 56^{55} <& 56^{56} \\
c_{54} \cdot 56^{54} <& 56^{56} \\
... \\
c_1 \cdot 56 + 1 <& 56^{56}
\end{aligned}
$$
Only the first terms are equal, and all others are smaller in the second sum. Therefore clearly their sum is smaller as well. This means $56^{57}$ is larger than the maximal estimation we made of $57^{56}$, which guarantees it's bigger than $57^{56}$ as well.

> [!note]
> For those with a math background it's clear I'm using polynomial expansion here, where I'm treating $56$ as the variable. This proof can easily be formalised and even generalized for all $n > 2$ using this method.