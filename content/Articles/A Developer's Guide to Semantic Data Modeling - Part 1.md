---
title: "A Developer's Guide to Semantic Data Modeling - Part 1: Information Models"
date: 12-30-2023
draft: true
---

## The Anatomy of a Data Model
Writing data models involves several aspects.
### Semantics
The data model should represent concepts from the domain and relations between those accurately. This encoded domain knowledge makes up the **semantics** of your data model.
### Constraints
The **constraints** of your data model express the expected use of the data. It imposes structure and ensures that values have valid cardinalities and types.

> [!tip] An elegant consideration is to regard [[Data Models As (Domain-Specific) Languages|data models as a (domain-specific) language]] by interpreting the constraints as the syntax of that language.
### Implementation details
To actually have a usable data model, the semantics and constraints have to be encoded using some language or technology. Doing this as well as possible adhering to good practices documented for the used technology makes sure to take care of the **implementation details** of your data model.

> [!example]+
> Take a look at the following data model in Python:
> 
> ```python
> class Genre(Enum):
>	BLUES = 0
>	CLASSICAL = 1
>
> @dataclass
> class Person:
>	id: int
>	first_name: str
>	last_name: str
>
> @dataclass
> class Performer(Person):
>	plays_genre: Optional[list[Genre]] = None
>```
>
> Let's verify that this data model covers semantics, constraints and implementation details.
>
> ###### Semantics
 > The classes represent the concepts of genres, persons and performers. There's a relation *plays genre* between performers and genres, and we've modeled that all performers are persons using the subclass relation. Moreover, each class consists of attributes that provide further detail about the nature of the concepts.
>
> ###### Constraints
> Persons are required to have IDs and these are scalar integer values. Performers need to satisfy all the constraints of persons, and can optionally also play several genres.
>
> By constraining attributes to be required or optional, scalar or multivalued and to have values of a specified type, the data model enforces a certain structure and expected use. Not satisfying any of the constraints will cause a validation error.
>
> ###### Implementation details
> We need some technology to encode the desired semantics and constraints in. In the example we chosen Python to achieve this. By using type hints, data classes and enumeration classes we're relying on good practices to get the job done.

---

Ideally, developers focus on building applications, and should at most be bothered with the implementation details of a data model, not its semantics or constraints, since that requires business or domain expertise that developers cannot be expected to have.

### Recap
> [!note]
> **Data models** consist of:
> * **semantics** which describe concepts from the domain and relations between those
> * **constraints** which express expected use of the data by putting constraints on value types and cardinalities, and on how the data is structured
> * **implementation details** which are choices to encode the semantics and constraints as truthfully as possible

## Modeling the Domain

Yet, in practice, it's the developer who is responsible for making sure their data models aptly represent the domain. Of course there's subject matter experts they can consult, but it's on them to take charge, 
