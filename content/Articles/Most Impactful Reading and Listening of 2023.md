---
date: 2023-12-22
---

This is a review of the resources I've consumed in 2023 and learned the most from professionally, was the most intrigued by, had the most fun with, etc. It's not a comprehensive list either: only the best are covered.

The topics include mostly data architecture, semantic modeling, AI and LLMs, and data-driven, functional programming.
# Books
### Semantic Web for the Working Ontologist: Effective Modeling for Linked Data, RDFS, and OWL (3rd Ed.)

![[../Attachments/Semantic Web for the Working Ontologist (3rd Edition) - Book Cover.png]]

For those aspiring to work with semantic modeling, knowledge graphs or ontologies, The Semantic Web is a great framework of standards and technologies to learn.

The book explains how The Semantic Web is the machine readable counterpart to the World Wide Web and how it builds upon the existing web architecture (HTTP, URIs, etc.). It teaches you the the RDF language for flexibly and powerfully representing countless languages and data points, the Linked Data philosophy to improve the ease of data exchange and integration, how to use the Web Ontology Language (OWL) for conceptual modeling and reasoning (through inferencing), SHACL for defining logical models which constrain usage within given contexts, the SPARQL language for querying RDF graphs, and much more.

There's a great balance between theory, examples and practical guidance: it really gets you started well.

Read my full review on Goodreads [here](https://www.goodreads.com/review/show/4853908945).

### Elements of Clojure

![[../Attachments/Elements of Clojure - Book Cover.png]]

I love books that teach me something fundamental, that challenge my core assumptions and frame things in a different, illuminating way. This book certainly falls in that category.

Zachary Tellman provides a very theoretical and broadly inspired perspective on software design. The amount of cited literature from a variety of fields including computer science, AI, philosophy of language and complex systems is vast.

It's very abstract though and certainly not always easy. It's the kind of read that on review and introspection will make you grow deeply. On the flip side: if you are looking to improve concrete skills you can put to use immediately, you're advised to look for another book.

Oh, and if you're wondering why it's called _Elements of Clojure_: I'm not sure. I mean, the entirety of chapter two is dedicated to Clojure programming idioms, and all the code examples are written in Clojure, but despite that, the title doesn't seem to capture the purpose and content of the book very well.

Read my full review on Goodreads [here](https://www.goodreads.com/review/show/4697623023).

# Papers and Reports

### Rise of the Knowledge Graph

Enterprises face major challenges with the huge amounts of data they are producing and accumulating. Disconnected data silos across the company cannot find each other, and even if they did it would be very difficult to align the datasets because of the different data models and technologies used.

Moreover, with the advent of AI it becomes increasingly important that our data is universally and easily available, including rich semantical descriptions of what the data is about (conceptual data model): we need knowledge graphs.

This report explains the power of the knowledge graph, and how it can facilitate a data fabric in which all data can be discovered and interconnected. Although other valid choices can be made, in this report the Semantic Web stack is used because of the benefits Linked Data provides for enabling a data fabric and decentralized architecture.

You can read the report for free on Cambridge Semantics [here](https://info.cambridgesemantics.com/the-rise-of-the-knowledge-graph-oreilly).

### On the Dangers of Stochastic Parrots, Can Language Models Be Too Big

Ever since the success of ChatGPT, LLMs are all the hype. Within the span of a year many companies (and users) are now using LLMs to ask chatbots for information, to draw interesting pictures, but also to perform more technical tasks such as populating knowledge graphs from unstructured text.

However, there are major challenges as well. Many know by now, for example, that LLMs tend to hallunicate when they don't "know" the answer. But there's several issues that don't get quite enough attention in my opinion, most notably the excessive environmental costs, the climate injustice that goes hand in hand with that, and the social issues stemming from the bias in the models. A final highlight from the paper is how people popularly misunderstand that LLMs cannot _understand_ language.

You can read the paper for free on ACM [here](https://dl.acm.org/doi/10.1145/3442188.3445922).

### On the Difference between Information Models and Data Models (RFC 3444)

I don't know why I enjoyed reading this old memo so much, but I think it provides a clear distinction between _information models_ (abstract, technology independent) and _data models_ (concrete implementations).

It's a fun and easy read, and I think it's useful to read something older from time to time. It gives a sense of historical context that makes you appreciate where we are now, and why we had to get there.

The memo can be read [here](https://www.rfc-editor.org/rfc/rfc3444).

### Why Functional Programming Matters

I've been wanting to read this seminal paper by John Hughes for years and I finally got around to it. It's written to showcase how easy it is to reuse and abstract pieces of logic using the functional programming paradigm, and how expressive and semantically explicit pure functional languages can get. It's really interesting to go through the examples and see how elegant solutions are composed without use of iteration and modification of variables. Everything is done in a declarative style using recursive definitions and immutable data structures.

Find the paper [here](https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf).

### Gartner - Demystifying Taxonomies, Ontologies & Data

I've read several high quality reports by Gartner, but this one truly stands out. It provides a lot of definitional clarity regarding terms such as data model, taxonomy and ontology, but also goes on to make very practical recommendations.

For example, when designing databases or other schemas, they recommend to let data engineers use whatever technology is most suited and preferred. That might sound obvious, but there's many resources out there calling for fully automation pipelines which generate such data models from a logical data model. Not to say this is never a good idea, but I really like the realistic take here to not consider this a default practice without risk and downsides.

# Courses

### Knowledge Graph 2023 (OpenHPI)

This course given by professor Harald Sack is a deep dive into the Semantic Web and Linked Data, knowledge graphs, natural language processing and language models, and in particular how LLMs and knowledge graph play nicely together in future AI developments.

Very interesting course with great teachers and material. It is quite dense in information however, and sometimes the topics can be very challenging.

There's also the [Semantic Web Technologies by Dr. Harald Sack](https://www.youtube.com/playlist?list=PLoOmvuyo5UAeihlKcWpzVzB51rr014TwD) playlist on YouTube, covering much of the material.

The course can be found [here](https://open.hpi.de/courses/knowledgegraphs2023).

### Clean Architecture: Patterns, Practices, and Principles (Pluralsight)

Interesting overview of the history of domain-centric architecture, most notably Bob Martin's _Clean Architecture_. I was familiar with his Clean Code paradigm and since I'm not too fond of that, I was hesitant to take this course. However, it turns out that using these concepts at the architectural level makes a lot of sense to me.

It's a nice basis to have for understanding modern data-centric architectures such as Data Mesh as well, since concepts like bounded context and domains play a key role there.

# Podcasts

### Building Linked Data Products With JSON-LD (Data Engineering Podcast)

A great perspective on implementing Linked Data, rather than just discussing it high level. JSON-LD being compatible with JSON is a really great way to try and sell LD to engineering teams, since it brings familiarity and enables gradual adoption of LD.

Find it [here](https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuZGF0YWVuZ2luZWVyaW5ncG9kY2FzdC5jb20vcnNz/episode/ZGFjMGNkOGItYzUwYy00ODIzLTk4MzgtNTFiZTQ5ZWFhOGQw?ep=14).

### LLMs, Retrieval Augmented Generation, Knowledge Graph, Vector Databases with Mike Dillinger (data.world: Catalog & Cocktails)
We face some serious issues with LLMs, such as hallucination, lack of confidence scores and awareness of bullshitting, lack of explainability and poor contextual awareness, no inkling of privacy and security concerns, bias, lineage, etc. In this podcast, the role knowledge graphs can play in tackling those issues is explained. Their exact rather than probabilistic nature complements the LLM and provide a strong means of adding context in semantically rich ways. Retrieval augmented generation (RAG) is also explored.

Find it [here](https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXN0ZWQudXMvMTI3L0NhdGFsb2ctJTI2LUNvY2t0YWlscy0yZmNmODcyOC9mZWVk/episode/M2E4MjRlZjAtZWVhOS00YjY3LWFiMWEtMWQ0ZWRkYzg4OGMw?ep=14).

### Data Stewardship, Data Product Management, Data Governance and AI with Tim Gasper and Juan Sequeda (data.world: Catalog & Cocktails)

Interesting talk about how AI influences data management. Governance and modeling tasks are increasingly (partially) automated, and new roles such as that of data product manager are gaining more traction.

My take is that much as was the case with DevOps, where operations tasks became the responsibility of developers themselves and made central operations engineers superfluous, the same is now happening to data governance roles, whose tasks are similarly taken on by teams who create data products.

Bottom-up is beating top-down all around.

Find it [here](https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXN0ZWQudXMvMTI3L0NhdGFsb2ctJTI2LUNvY2t0YWlscy0yZmNmODcyOC9mZWVk/episode/MWIzNjc0ODItNzk2Yi00NWZhLTg3MDItNDVlZDU4MTA2MGYw?sa=X&ved=0CAcQkfYCahgKEwio8PympJ2CAxUAAAAAHQAAAAAQhAQ).

### Functional Geekery Episode 141 – Shriram Krishnamurthi

This episode mostly covers the topics of programming education and the paradigm of language oriented programming (LOP) in the Racket programming language.

LOP blew my mind. It takes the notion of domain-specific languages (DSLs) to the next level, calling to consider _any interface to be a DSL_. The idea is that in a properly structured project, an interface corresponds closely to some domain - note how this aligns pretty nicely with the domain-centric thinking we see in modern architecture - and every domain has its own language. Racket actually enables you to easily create languages, both the syntax and semantics, for each interface you create. This might sound like crazy overkill in the "once you learn about a hammer everything looks like a nail" kind of way, but it's a fascinating idea if you give it a chance.

Listen to the podcast [here](https://www.functionalgeekery.com/episode-141-shriram-krishnamurthi).

# Articles and Blogs

### Why I Don’t Use OWL Anymore / Why I Use SHACL For Defining Ontology Models / Why We Use OWL Every Day At Triply

This triple (pun intended) of articles should be read together to get the most out of it.

The first two are published by TopQuadrant, providing their case why they think OWL is too complicated and academic and was never intended to model data models for real wold use. SHACL, on the other hand, very much is, and is a lot easier to get a grip on, not least because it does not assume an open world like OWL does. It's an interesting, compelling case, although I'm still on the fence.

Triply has written a response article, pressing that open world semantics are actually required if we wish to grow knowledge graphs bigger. We simply don't live in a closed world and should expect knowledge to be updated continuously. To them, _both_ OWL and SHACL still have their places, playing different roles in the grand scheme of things.

Read the TopQuadrant articles [here](https://archive.topquadrant.com/owl-blog) and [here](https://archive.topquadrant.com/shacl-blog), and the response from Triply [here](https://triply.cc/blog/2021-08-why-we-use-owl).

#### RDF Triple Stores vs. Labeled Property Graphs: What’s the Difference?

Many modern graph databases are based on labeled property graphs (LPGs), in which nodes and edges have internal structure (labels). This is a significantly different model than RDF, and this article explains very well what consequences this has for modeling and data. For example, in RDF it is not (simply) possible to have two instances of the same property between a given subject and object. Also, (informally) qualifying relationships is easy using labels, but in RDF this involves making statements about statements, i.e. requires you to use reification.

Read it [here](https://neo4j.com/blog/rdf-triple-store-vs-labeled-property-graph-difference/).

# Talks and Vlogs

### Maybe Not - Rich Hickey (Clojure/conj)

Many developers these days seem to think: "static types good, dynamic types bad". If that's you, I recommend listening to this talk. Although static types bring great benefits, they come at costs not often mentioned in public discourse. Rich Hickey lays out some challenges with static types, in particular some issues relating to semantics and more notably to rigidness.

Clojure is a LISP, designed to treat everything (including code) as data, to emphasize the use of simple, open data structures like hash maps and vectors. Composability and reusability are greatly enhanced, and interaction with your interpreter allow for an exceptional interactive developer experience. From a data-architectural viewpoint I really appreciate Clojure as well.

Watch it [here](https://www.youtube.com/watch?v=YR5WdGrpoug&t=1s).

### Introduction to Data Mesh - Zhamak Dehghani

Great introduction to Data Mesh by the inventor herself. In about half an hour you learn about the fundamentals in a crisp and clear way. She really goes into quite a lot of detail in relatively little time. Highly recommended.

Watch it [here](https://www.youtube.com/watch?v=_bmYXWCxF_Q).

### An introductory journey to the Virtual Knowledge Graph approach to data access and data integration

Alright, you're convinced having an OWL ontology in RDF for your domain perfect sense, but what about all that data sitting in all these different non-RDF databases? To solve this problem, we can use virtual knowledge graphs, and Alessandro Mosca is going to show us how to do it (on top of relational databases at least) in this presentation.

Basically it involves writing a mapping from SQL queries to SPARQL queries, effectively enabling a mapper like Ontop to create triples from records on the fly.

Watch it [here](https://youtu.be/HImnxApfMlA?si=3o3vHtyX6_1leV2W).

### Comparing Semantic Web Technologies to TypeDB

TypeDB is an incredibly interesting graph database. It is strongly typed and very expressive, allowing developers to create formal conceptual models and inference rules on top of their graph data.

In this presentation they compare TypeDB to the Semantic Web technology stack: what different goals did both have in mind, and where are they perhaps overlapping? Absolutely recommend it.

Watch it [here](https://youtu.be/LFgV7sCnOrE?si=JONwobxOv4TK9Dhn).

### The Cynefin Framework

A short and great introduction to the Cynefin framework, which embraces an organisation and its people as a complex adaptive system. Interesting watch which takes only about eight minutes.

Watch it [here](https://www.youtube.com/watch?v=N7oz366X0-8).

### Why Does Scrum Make Programmers HATE Coding?

I have worked in many Scrum teams and I've never really liked it. Sometimes it was horrible, sometimes it was bad, but I never felt it was a truly good experience.

This video hits the nail on the head in identifying why I dislike Scrum, but also explains how this is mostly because of bad implementation and practice.

Watch it [here](https://www.youtube.com/watch?v=HURvJDldVGA).

# Anticipated Reading in 2024

Here's a few books and papers high on my list that I hope to read in the coming year.
### Books
- [_Designing Data-Intensive Applications_](https://dataintensive.net/) by Martin Kleppmann (already started)
- [_Semantic Modeling for Data_](https://www.oreilly.com/library/view/semantic-modeling-for/9781492054269/) by Panos Alexopoulos
- [_Data Mesh - Delivering Data-Driven Value at Scale_](https://www.oreilly.com/library/view/data-mesh/9781492092384/) by Zhamak Dehghani
- [_Building Knowledge Graphs: A Practitioner's Guide_](https://www.oreilly.com/library/view/building-knowledge-graphs/9781098127091/) by Jesús Barrasa & Jim Webber
- [_Linking the World's Information: Essays on Tim Berners-Lee's Invention of the World Wide Web_](https://dl.acm.org/doi/book/10.1145/3591366) by Oshani Seneviratne & James Hendler
- [_Data Management at Scale_](https://www.oreilly.com/library/view/data-management-at/9781492054771) by Pietheijn Strengholt (already started)

### Papers and Reports
- [_Information Modeling: From Design To Implementation_](https://www.semanticscholar.org/paper/INFORMATION-MODELING-%3A-FROM-DESIGN-TO-Lee/d2f4334f3acd1cd4084a65381c141b073b15e168) by Y. Tina Lee
- Stanford University's classic [_Ontology Development 101: A Guide to Creating Your First Ontology_](https://protege.stanford.edu/publications/ontology_development/ontology101.pdf)
- [_Ontologies and Information Systems: the Marriage of the Century?_](https://www.loa.istc.cnr.it/old/Papers/lyee.pdf) by Domenico M. Pisanelli, Aldo Gangemi and Geri Steve
- [_Knowledge Graphs: New Directions for Knowledge Representation on the Semantic Web_](https://drops.dagstuhl.de/storage/04dagstuhl-reports/volume08/issue09/18371/DagRep.8.9.29/DagRep.8.9.29.pdf) by Piero Andrea Bonatti, Stefan Decker, Axel Polleres and Valentina Presutti
- [_Out of the Tar Pit_](https://curtclifton.net/papers/MoseleyMarks06a.pdf) by Ben Moseley and Peter Marks

In practice, I never end up reading exactly what I planned. This is okay. As with our businesses and codebases, I wish to remain Agile.