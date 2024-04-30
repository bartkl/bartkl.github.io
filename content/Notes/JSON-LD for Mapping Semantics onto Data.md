---
date: 2024-04-30
tags:
    - information-modeling
    - semantic-web
---

## Providing semantics to your data

In decentralized architectures with a bottom-up approach to producing data, it can be challenging to keep track of what our data means.

A great way of keeping track of the meaning of our data is by mapping schema element names onto terms from RDF (often standardized) vocabularies.

For example, if there's a type `title` in my schema, I might map that onto the `title` term from the DC Terms standard:

> `title` -> `http://purl.org/dc/elements/1.1/title`

### JSON-LD
Although RDF and the Semantic Web are incredible technology, it is also notoriously hard to sell (and learn). Luckily however, certain tools and technologies have made it easier to use.

JSON-LD is a superset of JSON which aims to enrich the JSON language with Linked Data capabilities.

Some noteworthy facts about JSON-LD:
* it is a proper JSON serialization of RDF graphs
* it's fully compatible with JSON
* It provides the ability to map schema element names onto RDF URIs using the JSON-LD *context*
    * Note that the context can be kept in a separate file

Basically, **JSON-LD can bridge the gap between business and IT**.

## Ways this could work

### Code-first

This is a popular way of working with developers, where they develop a data model and/or interface in their programming language and framework of choice. Then, from that code a specification is generated.

![[../Attachments/Mapping LD URIs between Vocabularies and APIs 2024-04-30 18.23.38.excalidraw]]

### Spec-first

A straight-forward way is if developers work *spec-first*, i.e. they define the interface specification themselves and have subject matter experts bother making sure the business lineage is taken care of.


![[../Attachments/Mapping LD URIs between Vocabularies and APIs 2024-04-30 16.38.50.excalidraw]]


### Model-driven

Another great initiative which aims to improve the accessibility and adoption of Linked Data is the LinkML modeling language.

It's primarily suited for defining (logical) data models, from which a variety of physical schemas can be generated, including JSON Schema and JSON-LD contexts.

![[../Attachments/Mapping LD URIs between Vocabularies and APIs 2024-04-30 17.38.44.excalidraw]]

---

No matter which of the three scenarios applies to you, in all cases it is possible to provide a mapping of (local) schema element names to RDF URIs in a JSON-LD context, leveraging the power of Linked Data at the cost of barely anything.