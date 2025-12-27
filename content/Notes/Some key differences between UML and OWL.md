---
draft: true
---

> [!Summary]+
> | | UML       | OWL                    |
> |--- |--------- | ---------------------- |
> | **World assumption** | CWA     | OWA            |
> | **Model type** | Logical (structured)  | Conceptual (descriptive)    |
> | **Purpose** | Data modeling and validation | Knowledge representation and inference |
> | **Paradigm** | OOP-based | Mathematical set-based OO |

### Assumptions about the world
UML was designed with software systems in mind, and therefore assumes a closed world. This means anything that is not explicitly known, is assumed to be false.

OWL, on the other hand, was designed with knowledge representation in mind, and assumes an open world: you either explicitly know if something is true or false, or you just don't know.

### Logical vs conceptual model
UML class diagrams are logical data models. They are structured, and their purpose is to describe the shape of the data such that validity can be checked.

OWL ontologies are conceptual models in which a formal description of the real world is given. The semantics of the language then allow for inference of new knowledge as well as to verify consistency of statements. Note that these models lack structure entirely.

### UML class attributes vs OWL properties
Another difference is that class attributes in UML are owned by that class, i.e. its existence is tighly coupled to the class. OWL properties, on the other hand, do not belong in any sort of way to classes, but are first-class things one can declare the existence of, no different from classes.

Again, OWL is about modeling the real world, so I want to describe all sorts of things without bothering with structure on forehand. Whether it's a property like "name" or "is parent of", or a class (of things) like "vehicle" or "animal", I just want to declare it's existence and state things about it.

A noteworthy corollary of this is that in UML, attributes with the same name but contained in different classes cannot be assumed to be identical. It then follows, as a consequence of the CWA that these attributes are distinct.

<!-- 
TODO: Difference between not specifying an attribute in a UML class and having an optional one specified. Here, again, you see the logical nature of the model: even if everything is optional, it still constrains the properties one is allowed to use. How to model that in OWL or SHACL
-->

> [!Example]+ Example 1
> ![](../Attachments/Challenges%20with%20mapping%20UML%20classes%20to%20OWL%202024-07-08%2009.45.42.excalidraw)

---

Having identified those differences, let's see what consequences they have that make the mapping less trivial than it seems.