## 20-06-2024 &mdash; [Standardized Developer-Friendly Data Modeling with LinkML](https://www.bartkl.com/presentations/linkml240620)

> [!abstract]-
> In this small presentation I share with the LinkML Community how LinkML is currently
> being used to model data products at Alliander, and especially at Netbeheer Nederland,
> a national collaborative effort between Dutch grid operators.

## 16-05-2024 &mdash; [Building CIM-based Data Products with LinkML: the Linked Data Modeling Language](https://www.bartkl.com/presentations/cimug2024)

> [!abstract]-
> Alliander has been working on implementing a decentralized Data Mesh
architecture. Data is produced bottom-up, empowering teams and removing
centralization bottlenecks. To make sure we can manage and govern the data,
teams need to treat their data as a product, providing metadata to describe things
such as ownership, versioning, quality annotations and privacy and security
classifications. Crucially, this also includes a logical data model that describes the
structure of and constraints on the data.
>
> Many of these so called data products could benefit from having their logical data
models being based on the CIM, i.e. use the CIM as a vocabulary. In this talk we
will look at several ways of doing that, introducing and tackling challenges as we
encounter them.
>
> Since the normative CIM model is developed in Sparx EA, many CIM users use EA
for information modeling. Despite the support of powerful features such as
profiling and schema generation, EA has serious limitations, most notably: (i)
Linked Data support is minimal; (ii) interoperability with other software is non-
trivial and cumbersome; and (iii) the model is not represented as human-readable
plain text, causing users to be unable to use text editors and other text
manipulation tools to maintain it.
>
> Next we will look at the Semantic Web technology stack and see that it solves the
aforementioned problems with EA: Linked Data is part of its philosophy, it is plain
text and also well-standardized. Furthermore, the technology is very flexible and
mature. However, it comes with challenges of its own, most notably that the
technology is notoriously abstract, complex and inaccessible to both developers
and information architects/modelers.
>
> Finally, we will look at LinkML, a modeling language that is both human and
machine readable, designed to be accessible to write or generate, and expressive
enough to support Linked Data and both conceptual and logical data modeling.
Out of the box it ships with a bunch of generators to create physical data models,
documentation and visualization. Moreover, since it is open-source it can be
extended easily.
>
> Will LinkML be our pragmatic savior?

## 15-03-2024 &mdash; [Entity and Relation Extraction using OntoGPT and SPIRES](https://www.bartkl.com/presentations/ontogpt240315)

> [!abstract]-
> At the Alliander Research Center for Digital Technologies I did a proof of concept
> with [OntoGPT](https://monarch-initiative.github.io/ontogpt), a library which helps
> with extracting entities and relations from unstructured text using a LLM and
> predefined schema.
