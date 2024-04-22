---
tags:
  - cs/data-modeling
  - cs/programming
date: 2023-12-18
---

Inspired by how the [Racket programming language](https://racket-lang.org/) holds to the [language-oriented programming](https://beautifulracket.com/appendix/why-lop-why-racket.html) philosophy that each interface could be considered a [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language) (DSL), I came up with the following interesting perspective: what if we regard a data model to be the language of the domain, i.e. as a **domain-specific language**?

If it is indeed a language, it must have **semantics** and **syntax**.
## Syntax
Data models encode *expected usage within the context of application*, e.g. data needs to conform to the structure and constraints on value types, cardinalities, etc. defined in the model in order to be well-formed. These structural and other types of constraints act as rules which form the syntax of the language that is the data model.

From the perspective of the domain language, malformed data such as when a required field is left out or a wrong data type, is a syntactical error since it is not of the expected [shape](https://www.w3.org/TR/shacl/#constraints-section).

> [!note]
> The aspects of the data model that we consider syntactical here corresponds precisely with the notion of a [logical data model](https://en.wikipedia.org/wiki/Logical_schema).
## Semantics
Data models also encode the **meaning** of concepts and relations from the (business) domain. Discerning concepts, relating them to one another and decomposing them into attributes that constitute them signifies meaning in the sense that it makes us understand the things that are being modeled.

For example, a subclass relationship teaches me that if someone is an employee, they are also a person, and if we assume the host language does not support multiple inheritance and assumes a closed world, we also know the person is not an animal.

It is in this way that the concepts and relations between them make up the semantics of the domain language.

> [!note]
> The semantics described in the data model correspond precisely with the notion of a [[Conceptual Data Model|conceptual data model]].
## Example
Let's look at the following Python data model as an example:

```python
@dataclass
class Person:
	id: int
	name: str

@dataclass
class Employee(Person):
	sick: Optional[bool] = None
```

As can be seen above, in this model every person is required to have both an ID and a name. Leaving out either of these will yield a type error:

```python
>>> no_one = Person(name="No one")
TypeError: Person.__init__() missing 1 required positional argument: 'id'
```

In the language of our domain in the current context, to speak of a person without an ID is invalid. Persons have IDs, or you are not speaking correctly about a person. It is in this sence that it this error was truly a matter of syntax.

Only if we can make sense of the syntax of this domain language, we can proceed to interpret the meaning of the data.

Let's look at a syntactically valid example:

```python
>>> bart = Employee(id=1, name="Bart Kleijngeld")
>>>
```

This time, the data is well-formed and can be parsed. Now, we can interpret the data, i.e. focus on its semantics:
```python
>>> isinstance(bart, Person)  # Employees are persons.
True
>>> 'sick' in bart.__dataclass_fields__
True
```

Note that the conceptual modeling capabilities in Python are very limited. In a highly expressive language like [OWL](https://www.w3.org/OWL/) or [TypeQL](https://typedb.com/) we could've looked at more interesting examples to do with semantics. This is beyond the scope of this note, however.
## Metalanguage confusion
Some might object:
> You are wrong. To leave out a required field does not constitute a syntax error, but a type error, just like the Python interpreter in the example says.

This objection comes from a confusion about *what language we are focusing on*.

Python is the language in which we express our domain language (the data model), i.e. it's the **[metalanguage](https://en.wikipedia.org/wiki/Metalanguage)**.

From the point of view of the metalanguage, the aforementioned type error is indeed just that: a type error. For a syntax error to occur here this would require a misplaced or missing comma, or some other invalid sequence of characters.

Similarly, Python as a metalanguage understands the semantics of the concept of a class, but has no idea of the semantics of an employee (defined to be a class).

This is why I try to keep stretching that the data model itself spans another, higher level language expressed in Python, and from its perspective, the syntax and semantics are as I've laid out, e.g.: it is the language that allows us to speak about persons and employees according to the rules and relations imposed by the data model.
## Final thoughts
All of this was just a thought. I'm not even sure I'm entirely correct about all I've laid out here, but I feel like it's an elegant way to look at it.

> [!info]
> By regarding the data model as a language, we immediately recognize the role of the conceptual data model being about semantics, and the role of the logical data model being about syntax. This is a very elegant way to elucidate the difference between the two by mapping them on well-understood formal concepts from language theory.