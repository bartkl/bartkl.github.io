---
title: "A Developer's Guide to Semantic Data Modeling - Part 1: Information Models"
date: 12-30-2023
draft: true
---

# Who Should Read This
As a developer or data engineer you are probably regularly faced with the following challenges:

* Naming things intelligibly, accurately and consistently
* Modeling the domain and requirements of the use case well, losing time (and perhaps energy) consulting with subject matter experts
* Querying data from a database, having to guess what the `Z_FLD_01` represents
* Integrating two data sets you need to judge whether the `Customer` type used in the first data set is equivalent to the `Client` type used in the second, with documentation being hard to find or ambiguous at best and lacking altogether at worst
* Being unable to reuse a data model because it is written in a different language, or because the constraints don't fit
* Having to maintain a database schema, data classes and OpenAPI specification every time something changes to the data model

If so, and if you want to tackle these challenges, you should definitely read this article.

In this article you'll learn to take on these issues by putting to use different kinds of data models and specialized, and dedicated modeling languages to represent them in.

First, let's take a closer look at the aforementioned challenges.

<!-- ## Roadmap
First we'll describe the challenges above in more detail.

Then, we'll take a closer look at data models: what constitutes them; what kinds of things are described in them?

We move on to learn about conceptual and logical data models, each of which specializes in describing one of the aforementioned different aspects of our data model.

We will then reflect on what we've learned and see that some of our challenges can already be combatted.

Covered next is the Semantic Web, where we will learn in particularl about RDF and Linked Data.

Then we're ready to learn about dedicated modeling languages such as RDF Schema, OWL, SHACL, but also LinkML. As we will see, some of these languages are far more expressive and flexible than most developers are used to. -->

---
# Challenges with Data

## Accurately modeling the domain
![A Developer's Guide to Semantic Data Modeling - Domain Modeling - 2023-12-30 23.08.11.excalidraw](../Attachments/A%20Developer's%20Guide%20to%20Semantic%20Data%20Modeling%20-%20Domain%20Modeling%20-%202023-12-30%2023.08.11.excalidraw.md)

When creating a data model it should reflect the domain accurately. This involves, first and foremost, discerning what concepts and relations exist and deciding which ones are relevant to include in our model. We also have to choose how we represent these things in our data model and what to name them.

Since this task requires a lot of domain knowledge to do right, developers typically consult subject matter experts (SMEs) who are domain specialists to help them out. Although this is helpful, it's far from an ideal situation.

SMEs are likely to receive the same questions over and over from different development teams. This is tedious and very inefficient, a waste of time for both parties. Of course it's likely there's more than one SME, which may mitigate part of that problem, but that causes another problem.

Different SMEs tend to use different language and may have different conceptualizations of the domain in their minds. Because of this, the data models they helped making will suffer from those inconsistencies as well. This isn't ideal even if everyone were a domain expert, but especially since that's not the case, this can cause major confusion as to what the data means.

## Understanding what the data is about
![A Developer's Guide to Semantic Data Modeling - Opaque Names - 2023-12-30 23.08.11.excalidraw](../Attachments/A%20Developer's%20Guide%20to%20Semantic%20Data%20Modeling%20-%20Opaque%20Names%20-%202023-12-30%2023.08.11.excalidraw.md)
#### Opaque, confusing or ambiguous names
We've all been there, trying to guess the meaning of a column with some cryptical or completely opaque name like `Z_FLD_01` . Perhaps we're lucky, and the column name is intelligible but just ambiguous, as is the case with the `TAX` column in the image above: what is this column meant to represent? The amount of tax paid for this order line? The tax category it falls in?

Coming up with good names is hard. Making sure names are standardized and used consistently throughout our domain (and beyond) is even harder. It doesn't help that we have data models in a large variety of languages and technologies, all of which impose their own restrictions on what names are valid and whether these can be namespaced or not. Neither can definitions be shared this way.

#### Lack of proper and findable documentation
Documentation in which definitions or descriptions can be found of what the elements in our data models mean can help us a lot. In practice, however, providing documentation turns out to be challenging.

First of all, where should the documentation be maintained? It seems preferable to keep its maintenance close to the data model, such that when we make changes to it, we update the documentation as well.

Some languages provide convenient capabilities to do this. For example, OpenAPI specifications and Pydantic data classes both support providing descriptions for fields. However, not with every language do you have this luxury. In SQL DDL and plain Java classes for instance you would probably have to do with regular code comments.

And that's just maintenance. Documentation also needs to be easy to find and comfortable to read. Surely we cannot expect people, especially non-developers, to navigate through the large variety of codebases where documentation is included in a variety of languages. We need to make sure there's a central and easy to find place where all of the documentation can be read in a uniformous, comfortable way.

## Harmonizing data from different datasets
![A Developer's Guide - Data Harmonization - 2023-12-31 09.44.31.excalidraw](../Attachments/A%20Developer's%20Guide%20-%20Data%20Harmonization%20-%202023-12-31%2009.44.31.excalidraw.md)

Suppose we are consuming data from different sources (external to our own team or organisation) and wish to integrate these data sets. In order to do this we have to understand how terms used in one data set relate to those used in another.

For example, in the situation depicted in the image above we've obtained order data from the Store department and wish to join customer data to this that we've received from the Marketing department. However, the Store department speaks of *clients*, whereas Marketing has data about *customers*. Do these represent the same concepts? Is one a subclass of the other? Or are they completely unrelated?

Besides this issue of **semantic interoperability**, there's also that of **technical interoperability**. Integrating data in a JSON document with a tabular result from a SQL query involves first parsing and transforming both in some intermediary (programming) language, only to then to subject them to the business logic that takes care of the integration.

## Flexible reuse of (parts of) models
![A Developer's Guide - Flexible Reuse - 2023-12-31 10.01.37.excalidraw](../Attachments/A%20Developer's%20Guide%20-%20Flexible%20Reuse%20-%202023-12-31%2010.01.37.excalidraw.md)

#### Reusing a data model
If some part of a domain has been modeled appropriately in some data model, it would be great if this data model or parts of it could be reused. Sadly this is riddled with complications.

The most obvious issue is, again, that of technical interoperability. If one data model is represented in a completely different language from the other, that's practically an immediate showstopper. Even if the same language is used, though, we are typically severely limited in the extent to which we can reuse data models.

Let's again turn to an example (see the image above). Consider the object-oriented model associated with the Order Data API. It contains a `Customer` class with a required `bankAccountNr` attribute. Someone developing the Customer Data API also works with customer data, and wonders if perhaps they can make use of this `Customer` class as to prevent reinventing the wheel. Unfortunately they discover that in their use case, the `bankAccountNr` is not necessary. Note how any reuse is immediately rendered impossible. Even if the entire class fits your need perfectly, a single difference in cardinality or value constraint might mean nothing is possible.

Some models are more flexible, such as graph database schemas which treat relations as first-class citizens. Although this is not sufficient by itself, is really helps. Later we will be looking at graph models more closely.
#### Sharing names, definitions and descriptions
In some cases data models may vary greatly, but do share concepts and relations. Wouldn't it be nice if we could make it clear in our data models that we're both talking about the same concept, even though the constraints and structure and language used for technical representation are very different? Make sure to stay tuned and learn that this is not just a pipe dream.

## Maintenance of several implementations of the same data model
![A Developer's Guide New Version 2023-12-31 10.10.14.excalidraw](../Attachments/A%20Developer's%20Guide%20New%20Version%202023-12-31%2010.10.14.excalidraw.md)

Often, the application you develop stores data in a database, which is then extracted and transformed in some programming language, and finally served with a API. You find yourself maintaining three schemas that are actually very similar - if not downright equal - besides the different technologies used.

Any small change to the model of the model involves reflecting this change in every of these data models. That's quite an inconvenient choir.

# Decoupling Semantics and Constraints
To tackle the aforementioned challenges, let's first understand our data models better. 

## Data Models

### The Anatomy of a Data Model
Writing data models involves several aspects.

#### Semantics
The data model should represent concepts from the domain and relations between those accurately. This encoded domain knowledge makes up the **semantics** of your data model.

#### Constraints
The **constraints** of your data model express the expected use of the data. It imposes structure and ensures that values have valid cardinalities and types.

> [!tip] Domain-specific Languages
> An elegant consideration is to regard [[Data Models As (Domain-Specific) Languages|data models as a (domain-specific) language]] by interpreting the constraints as the syntax of that language.

#### Technical details
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

Ideally, developers focus on building applications, and should at most be bothered with the implementation details of a data model, not its semantics or constraints, since that requires business or domain expertise that developers cannot be expected to have. To this end we can make use of specialized kinds of data models which are dedicated to focus only on semantics or constraints.
### Kinds of Data Models

### Conceptual Data Models

> [!definition] Definition
>
> A **conceptual (data) model**[^1] is a model of a domain in which concepts and the relations between them that exist in the domain are described.
> 
> The purpose of conceptual models is to describe the semantics of the data with varying levels of detail depending.
> 
> It is a model of the **semantics** of your data, independent of use case, applications and technology.

[^1]: They go by many more names, such as *information models* ([RFC 3444](https://www.rfc-editor.org/rfc/rfc3444)), *semantic data models* ([Alexopoulos, 2020](https://www.oreilly.com/library/view/semantic-modeling-for/9781492054269/)) and [*domain model*](https://en.wikipedia.org/wiki/Domain_model). *Ontologies* from the field of knowledge representation can also be regarded conceptual models.

### Logical Data Models
> [!definition] Definition
>
> A **logical data model** describes the constraints on and particularly the structure of your data that express the intended use of the data within the context of the use case.
> 
> It is a model of the **constrains** on your data in the given context, independent of technology.

In some context 

Some like to say conceptual models are about the **what** of your data, whereas logical data models are about the **how** of your data.
### Technical Data Models
> [!note] Definition
> A **technical data model** is a model of the data that describes the technical implementation details of the data, such that machines know how to read, store and manipulate it.
> 
> These models can be regarded as technical implementations of logical data models, and are the data models most familiar to developers.

## Benefits

# Machine-readable Modeling and The Semantic Web

## Web Architecture
* URIs
* HTTP protocol
* Content-Negotiation
* Embedding in WWW
## RDF

## Linked Data

## Knowledge Representation
Ontologies can be used for **conceptual data modeling**.
#### RDF Schema and OWL Ontologies

### Constraints Languages
Can be used to for **logical data modeling**.
#### SHACL
...

## LinkML


## 
<!--

Clearly, these issues are caused by how we go about modeling our data. Respecting the order of the challenges above, consider the following:

1. Domain and technical modeling expertise are comingled in the data model, making it hard to divide the work among the appropriate professionals and causing domain models to lack semantic detail.
2. Names in data models are local to the model, as well as restricted to technical limitations and conventions. This 
3. There's a lack of standardisation and explicit knowledge how different concepts relate to one another
4. Modeling of a specific use cases is comingled with modeling of the domain, and entities are often the only first-class citizen, causing the models to be very rigid and difficult to reuse
5. TODO
-->



## What is a Data Model?

### Data Models as Language of the Domain

#### Semantics

#### Syntax

#### Metalanguage

### Tight Coupling is the Problem

## Information Models to the Rescue

### Information Models vs Data Models

### Semantic or Conceptual Models

### Logical Data Models
