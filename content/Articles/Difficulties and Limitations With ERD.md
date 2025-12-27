---
tags:
  - cs/data-modeling
date: 10-28-2024
---

## ERD Model Example 1
Consider the following ERD model (using Barker notation):
![[../Attachments/Untitled 2 2024-10-29 13.52.30.excalidraw]]

The following statements are encoded in this diagram:
* Each `Citizen` must be `residing in` one and only one `House`.
* Each `House` may be `accomodating` one or more `Citizen`s.

These statements can be unambiguously decoded from the model, allowing for a standardized way of converting between a code-based and diagram-based representation. What needs further clarification, though, is how to interpret the meaning of "must be" and "may be".

### Modes of interpretation
Let's use the first statement above as an example:

> Each `Citizen` must be `residing in` one and only one `House`.

I see two fundamentally different ways to interpret this statement:
1. If `x` is a citizen then `x` _SHOULD_ reside in one and only one house (_Validation_)
2. If `x` is a citizen then `x` _DOES_ reside in one and only one house (_Knowledge representation_)

Perhaps the distinction becomes more clear when I paraphrase as follows:
1. Given a citizen  `x`, if `x` does not reside in one and only one house, then this data about `x` is *invalid*. (_Validation_)
2. If `x` does not reside in one and only house, then `x` is not a citizen. (_Knowledge representation_)
    * If, moreover, `x` is stated to be a citizen, this leads to a *contradiction* and consequently to *inconsistent* knowledge.

> [!INFO] Another way of putting it
> * *Validation is prescriptive*
> * *Knowledge representation is descriptive*

In the case of this model, it seems pretty obvious the validation interpretation is the intended one, but later we will be looking at an example where it is in fact the second interpretation that makes more sense.

Furthermore, it is important for a metamodel to be explicit about its semantics and assumptions. Let's discuss the two modes of interpretation in more detail.

> [!NOTE]+ Different meaning of constraints in the interpretations
> The concept of a _constraint_ exists in both interpretations, but takes on a different meaning.
>
> In the context of validation, a constraint restricts the possible set of values that yields a valid data set with respect to the set of validation rules. In the case of no constraints, anything is valid.
>
> On the other hand, in the context of knowledge representation, a constraint restricts the types of things an entity can be. When there are no constraints, you can merely conclude the existence of something exists, i.e. that it is a member of the set of all things.

#### Validation
The validation interpretation concerns itself with validating the correctness of the statement, making the statement act as a validation rule which puts constraints on the permissible set of shapes and values data can take on.

In the example statement, you start with an entity that is known to be of type  `Citizen`, gather the data about where this citizen is said to be `residing in`, and use this rule to validate whether this data meets expectations: is it indeed an entity of type `House` the citizen resides in? Is there indeed exactly one such house? If the rule is not satisfied, the data is *invalid*, representing a situation that is undesired and needs to be dealt with.

#### Knowledge representation
The knowledge representation interpretation concerns itself with the formal representation of knowledge, relying on descriptive statements and inference. In this case constraints are used to limit the possible types an entity can be inferred to have.

In the example statement a necessary property is described of what it means to be a citizen, namely to reside in one and only one house. So if an entity is of type `Citizen`, due to the necessity we can *infer* (and thus _know_) the citizen resides in one and only one house, and if an entity resides in zero or many houses they are not a citizen.

> [!NOTE]- Reverse order of statements
> When stating something about a subject for the purpose of validation, oftentimes this subject becomes the object of statements for the purpose of knowledge representation.
>
> For example:
> * (_Validation_): if you are a car, then you [should] have four wheels.
> * (_Knowledge representation_): if you have four wheels, then you are a car.
> Note hote how the subject 'car' in the validation statement has become the object of the knowledge representation statement.
>
> Although this is highly informal and not very precise, thinking of validation and inference in some kind of reverse sense this way can be conceptually helpful and illuminating.
#### Correctness versus consistency
An important difference between the interpretations is that in the case of validation data can be *invalid* with respect to a given validation rule, and you can specifically point to the statements that are *each* invalid. This is in stark contrast with the knowledge representation interpretation in which case no such judgment can be made: you can either infer something or you cannot. Put differently: whereas validation is all about verifying correctness, knowledge representation is fundamentally incapable of judging at all.

What _can_ occur in knowledge representation, however, is a contradiction. This would occur if an entity is asserted to be something distinct from a citizen, but it also inferred to be a citizen for example. This leads to a state of *inconsistency* of the (known) data. Note, however, that in this case no single statement can be considered the culprit. Under this mode of interpretation every perspective is purely descriptive and "equally valid" (that is risky, sloppy language). Only the entire set can be inconsistent on account of containing contradictory statements (asserted or inferred).

#### Open and closed world assumption
The interpretative difference laid out here has much to do with the formal notions of the so-called Open World Assumption (OWA) and Closed World Assumption (CWA).

Under the CWA, the only true statements are those you know to be true, and anything that is not known is assumed to be false. Although this might seem wrong, this is in fact the assumption made by many information systems we use daily.

The OWA on the other hand makes no special assumptions like the CWA, and simply maintains that you must explicitly know whether something is true or false, and otherwise you simply don't know.

##### Validation and the CWA
*Validation* benefits from the CWA, since it avoids computational problems. For example: suppose you're validating whether a car has exactly four wheels, but you only find two in the dataset. Under the CWA you can now conclude the data is invalid. Under the OWA, however, you cannot know whether the third and fourth wheel are out there somewhere in some other dataset, rendering this validation task inconclusive which is highly impractical.

##### Knowledge representation and the OWA
_Knowledge representation_ on the other hand benefits from the OWA. The goal is to be able to represent knowledge, including contradictory perspectives, without judging whether one is more valid than the other ("anyone can say anything about anything"). Discovering new facts in other places or moments in time and updating the currently known knowledge is exactly the point of knowledge representation. Inconsistent states are not wrong or a problem inherently either, although in many practical use cases it does require attention.

## ERD Model Example 2
Let's now turn to an example which, as promised, actually makes more sense under the knowledge representation interpretation:

![[../Attachments/ERD vs OWL 2024-10-25 21.25.33.excalidraw]]

In this example, the validation interpretation would mean verifying whether something that is said to be a car has the expected count of wheels, and when it doesn't we conclude that "this car has the wrong amount of wheels".

That interpretation seems sensible, but hopefully you agree that it is not at all clear that the knowledge representation interpretation is *not* the intended one. Under that interpretation, failing to have multiple wheels would mean the thing is not a car. If it is stated to be a car, that yields a contradiction, causing the essence of a car to be ambiguous.

> [!NOTE] Semantic perspectives
> One might object that once I remove all wheels from a car, it is still a car. It is here where _semantic perspectives_ come into play. In a domain that is about repairing vehicles, then that makes sense, but if your ontology is about modeling statistics about vehicles on the road, then you need to come up with a strict definition of *what to count as a car*. In that context, requiring them to have more than 4 wheels is essential.

### Representing the model in OWL
The Web Ontology Language (OWL) is a formal language for knowledge representation through defining ontologies. It operates under the OWA and has inference semantics based on descriptive logics.

Let's try and model this model in OWL. I will be using the Turtle syntax.

```ttl
:Car a owl:Class .
:Wheel a owl:Class .

[] a owl:AllDisjointClasses ;
  owl:members [ :Car :Wheel ] .

:possessing a owl:ObjectProperty .
:partOf a owl:ObjectProperty .

:possessing owl:inverseOf :partOf .

:Car rdfs:subClassOf [
  a owl:Restriction ;
  owl:minQualifiedCardinality "1"^^xsd:nonNegativeInteger
  owl:onProperty :possessing ;
  owl:onClass :Wheel
] .

:Wheel rdfs:subClassOf [
  a owl:Restriction ;
  owl:onProperty :partOf ;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger
  owl:onClass :Car
] .
```

#### Properties in OWL versus relations in ERD
Note that in OWL, properties are not scoped to classes but exist just like classes do "at the top-level". Contrast this with many object-oriented programming languages, where attributes are often owned by classes.

This is yet another example where OWL is really explicit about how its semantics work, where with ERD it is not clear what assumptions can be made: If I encounter the use of two relationships with the same name in the some ERD model, can I the assume these are the same? Or different? Or neither?

> [!NOTE] Domains, range and inverse axioms
> One may be tempted to include the following domain and range axioms:
> ```ttl
> :possessing rdfs:domain :Car ;
>             rdfs:range :Wheel .
> :partOf rdfs:domain :Wheel ;
>             rdfs:range :Car .
> ```
> 
> First of all, it's important to realize that this is not necessary in OWL, and can actually be dangerous since it affects what knowledge can be inferred about things. It's best to tread lightly.
>
> This again touches on how to interpret the semantics of the metamodel. These axioms have a clear meaning in OWL. For example, the first axiom causes any entity which has a value for the `:possessing` property to be of type `Car`, and the value of type `Wheel`. Be cautious with this pattern, since if the `:possessing` property is also used for non-`Car` entities, those would be inferred to be `Car`s anyway.
>
> Note that despite that difficulty, I can safely state that `possessing` and `:partOf` are inverse relations, i.e. if `:x :possessing :y` then `:y :partOf :x`.

#### Necessary conditions
Note that we've only modeled *necessary conditions*:
* If something is car, it has wheels.
* If something is a wheel, it is part of exactly one car.

This example can trivially be generalized to show that these ERD statements can only represent such necessary conditions.

#### Sufficient conditions
What would a sufficient condition look like in this example? And how could we model it, if not in ERD, then in OWL?

Imagine once again the situation where I wish to identify cars on video footage so I can count them for some statistical purpose. I'm looking for a sufficient condition that what make me consider something a car. One that immediately comes to mind is "having exactly four wheels".

In OWL, this is straightforward:
```ttl
[ a owl:Restriction ;
  owl:qualifiedCardinality "4"^^xsd:nonNegativeInteger
  owl:onProperty :possessing ;
  owl:onClass :Wheel
] rdfs:subClassOf :Car .
```

Now any entity that has exactly four wheels, is inferred to be of the type `Car`.
## Conclusion
ERD models are formal models and their representation can unambiguously be converted between a diagram and sentence representation.

However, how to interpret ERD models depends on assumptions made at the metamodel level such as whether validation is the purpose or knowledge representation, and whether OWA or CWA is assumed.

We've explored the capabilities of ERD models put to use for knowledge representation and compared this to OWL. It became clear that ERD can only model necessary conditions, whereas OWL can model both sufficient and necessary ones.
