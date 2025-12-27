---
date: 10-28-2024
draft: true
---

## Example 1

![](../Attachments/ERD%20vs%20OWL%202024-10-25%2019.20.25.excalidraw)

Question: are relationships global like in RDF? Similarly: if two relationships have the same name, are they the same? If so, how to deal with domains/ranges?

---

### Interpretation
The statements encoded in this diagram are:
* Each `Citizen` must be `residing in` one and only one `House`.
* Each `House` may be `accomodating` one or more `Citizen`s.

Despite this being standardized and restricted, it's still vague what "must be" and "may be" really mean. For example, if something does not satisfy the constraint, what does this entail? Invalid data? Contradicting statements?

### Rewrite in OWL

To capture this model in OWL, let's first adapt the language of the sentences a bit to match the OWL way of thinking:

* $Citizen \subseteq \{ x \mid \#residingIn(x) = 1 \}$


```owl

:Citizen a owl:Class .
:House a owl:Class .

:residingIn a owl:ObjectProperty ;
  rdfs:range :House .

:accomodatng owl:inverseOf :residingIn .

:Citizen rdfs:subClassOf [
  a owl:Restriction ;
  owl:onProperty :residingIn ;
  owl:cardinality "1"^^xsd:nonNegativeInteger
] .
```

Can I safely state `:accomodatng owl:inverseOf :residingIn`?

Well:
* if `<x> :residingIn <y>`, can I deduce `<y> :accomodating <x>`? (Note all `x, y` pairs possible in the relation both ways are tested this way.)

I think you can state this. To be paranoid: if you couldn't, there has to be some `<p>, <q>` for which `<p> :residingIn <q>` does not entail `<q> :accomodating <p>.



> [!note]
> The axiom `:residingIn rdfs:domain owl:Citizen` would be a modeling error, since this would imply a citizen could reside in multiple houses. This is why the restriction class is necessary.

### Interpretations compared

If we interpret this through the lense of *validation*, then it means that whenever a citizen is found that resides in no or multiple houses, then that is invalid, i.e. a course of action should be taken to handle this unexpected information.

However, if we interpret this with the purpose of *knowledge representation*, then encountering a citizen who resides in no or multiple houses leads to a contradiction, since following the implications in the model tells that a given individual is both a citizen and cannot be a citizen.

> [!note]
> To expand on this: in the case of validation, a citizen having two houses means there might be an anamoly or even foul play. This validation error triggers for a call for action.
> However, in the knowledge representation context, this would lead to a contradiction as to whether this citizen is in fact a citizen, or the houses are in fact houses. It leads to inconsistency with regards to what these things *are*, rather than whether their values are *correct*.

> [!tip]
> This example is interesting because it feels weird to conclude that someone is not a citizen once they own more than one house. If such a smell occurs, this might indicate you're modeling at the wrong level of abstraction or using the wrong metamodel. That's to say: this case sounds like you're validating, which doesn't belong in an ontology. In an ontology failure to satisfy constraints means you apparently are not part of a certain set. It only tells you something about what things are.

OWL works like this on purpose, since it's goal is to describe an open world with many perspectives, that evolves every day. New knowledge can be found out about everyday, and the goal is not to judge whether something is true or not, just to be able to assert different perspectives and get a sense of the internal consistency and implications.

Note that in the ERD I can only describe *essential characteristics* (if something is an `X`, then I know `y` about it), whereas OWL can describe both those as well as *defining traits* (knowing `y` about something implies it is an `X`).

> [!warning]
> Interestingly though, in the ERD you can negate and flip the statements: when some citizen owns two houses, under the ontological interpretation I can conclude that the citizen is not a citizen, leading to an inconsistency. My point is: reversing in this way does provide an defining trait for *not* membership. Not sure what that's worth.

---

## Example 2
This example should have fitting constraints that actually pertain to ontological characteristics, i.e. if they are not met, this means the thing is not part of the set.

![](../Attachments/ERD%20vs%20OWL%202024-10-25%2021.25.33.excalidraw)

> [!NOTE]
> One might object that once I remove all wheels from a car, it is still a car. It is here where you semantic perspectives come into play. In your domain is about repairing vehicles then that makes sense, but if your ontology is about modeling statistiscs about vehicles on the road, then you need to come up with a strict definition of *what to count as a car*. In that context, requiring them to have more than 4 wheels is essential.

In this example, failing to have multiple wheels means the thing is not a car. If it tells it is, that is a contradiction: the essence of the thing is ambiguous.

To reiterate: this is **not** validating whether something that is said to be a car has the expected count of wheels, and when it doesn't we conclude that "this car has the wrong amount of wheels".

No, the conclusion here would suitably be: "it does not have the correct amount of wheels to be a car, so it is not a car."

Note how this feels like the right modeling choice in this example, as opposed to example 1.

---

* Graphol