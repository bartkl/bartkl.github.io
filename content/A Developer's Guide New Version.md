As a developer or data engineer, I bet you'll be very familiar with the following situations:

* When creating a data model, what classes should you discern and how do you name and define or describe them properly? Having to consult domain experts all the time is a major bottleneck.
* You're querying data from a table and struggle to understand what the column `Z_FLD_01` represents.
* You're consuming customer data from two sources. One has data of the `Client` type, the other data of a `Customer` type. You're unsure whether you can treat these as equals, and the documentation is hard to find, ambiguous or lacking altogether.
* You just modeled the entity *Employee* as a class with tens of attributes, one of which is the required *salary* attribute. A colleague of yours works with very similar data about persons as well and wishes to make use of your data model. Sadly, the *salary* attribute is optional in the context of her application.
* The application you develop stores data in a relational database, which is then extracted and transformed in Python and finally served with a REST API. You find yourself maintaining three schemas (SQL DDL, Python and an OpenAPI specification respectively) that are actually very similar - if not downright equal - besides the different technologies used.

---

## The Challenges
We'll cover five typical problems and see how they can be solved ..

### Accurately modeling the domain
![[A Developer's Guide to Semantic Data Modeling - Domain Modeling - 2023-12-30 23.08.11.excalidraw]]

When creating a data model it should reflect the domain accurately. Using tables, classes, types, records, etc. we represent concepts from the domain. Which ones exist and are relevant enough to include in our model? What should they be named? What attributes do they consist of? Am 

Since this task requires a lot of domain knowledge to do right, developers typically consult domain experts to help them out.

and define or describe them properly? Having to consult domain experts all the time is a major bottleneck.

### Understanding what the data is about
![[A Developer's Guide to Semantic Data Modeling - Opaque Names - 2023-12-30 23.08.11.excalidraw]]
#### Opaque, confusing or ambiguous names
We've all been there, trying to guess the meaning of a column with some cryptical, completely opaque name like `Z_FLD_01` . Or perhaps we're lucky, and the column name is intelligible but just ambiguous, as is the case with the `TAX` column in the image above: what is this column meant to represent? The amount of tax paid for this order line? The tax category it falls in?

#### Lack of proper and findable documentation
What would help enormously is documentation, but even this is often much to ask for. Oftentimes 

### Harmonizing data from different datasets
![[A Developer's Guide - Data Harmonization - 2023-12-31 09.44.31.excalidraw]]

Let's say we consume data from two sources.
Even if we have intelligible names, heck, even if we have documentation 

### Flexible reuse of (parts of) models
![[A Developer's Guide - Flexible Reuse - 2023-12-31 10.01.37.excalidraw]]

### Maintenance of several implementations of the same data model
![[A Developer's Guide New Version 2023-12-31 10.10.14.excalidraw]]

---

The great news is that all of these problems can be taken on by reconsidering how we approach data modeling.

As we'll see,


In this article, you'll learn:
* what a data model really is
* what kinds of data models can be distinguished
* why it makes sense to maintain separate models
* how dedicated, more expressive modeling languages help make our lives easier






## Challenges
As developers and data engineers, when working with data we are faced with certain challenges over and over again

### Modeling the Domain
As a developer, you typically don't know the domain well enough to confidently decide what entities, attributes and relations should be discerned, what to name them and how to define or describe them accurately.

Usually this means you consult a domain expert, which is far from ideal. Their knowledge often is

* What classes should I create and how do I name and define them properly?
* I've consumed data from some tables in our datawarehouse and I'm not sure I understand the meaning of the entitiy or properties the tables and columns represent
* I'd like to use certain classes or tables in several applications, but with different structures and constraints
* I'm using data from two different sources and I don't know whether I can safely assume that what one calls "customer" can be treated equal to what the other calls ""