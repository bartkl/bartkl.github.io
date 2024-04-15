---
marp: true
headingDivider: 3
theme: default
size: 16:9
style: |-
  /* Using the Takashi method. */
  section {
    font-family: "Fira Sans";
    font-size: 1.8rem;
  }
  h1 { font-size: 3.7rem; }
  h2 { font-size: 3.1rem; }
  h3 { font-size: 2.5rem; }
  h4 { font-size: 1.8rem; }
  ul {
    list-style: none;
  }
  ul > li,
  ol > li {
    margin-top: 1.5rem;
  }
  section img {
    background-color: unset;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
footer: "![w:100px h:60px](Images/alliander_logo.png)"
backgroundImage: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url("Images/scott-webb-UjupleczBOY-unsplash.jpg");
---

<!-- NOTES
* https://www.cimcontextor.net/index.php/en/products/cimcontextor/cimcontextor
-->

# Building Data Products with LinkML: The Linked Data Modeling Language
<!-- _class: unset -->
<!-- _backgroundImage: unset -->

###### Bart Kleijngeld | May 16th, 2024


![henry-co--odUkx8C2gg-unsplash](Attachments/CIMug%202024%20-%20CIM%20Data%20Products%20and%20Linked%20Data%20With%20LinkML/henry-co--odUkx8C2gg-unsplash.jpg)

![bg cover opacity:0.35](scott-webb-mV9-1XjnM4Y-unsplash.jpg)

## Hello
 <!-- _class: lead -->
 :wave:

![bg contain](ik.png)
* Bart Kleijngeld
	* Software Developer
	* Data Architect

## Agenda

1) Data Products and Modeling Challenges
2) All You Need is Sparx EA
3) Academic Purity with The Semantic Web
4) Settling for Pragmatism with LinkML
5) Demo

## Data Products and Modeling Challenges
<!-- _class: lead -->
<!-- // _backgroundImage: unset -->

### Data Mesh

* Decentralized architecture which empowers teams
* ![Data Mesh Core Principles.excalidraw.light](Data%20Mesh%20Core%20Principles.excalidraw.light.svg)
<!-- Mentioned only for reference; we will be looking only at "data as a product" -->

---

#### A Mesh of Data Products

![Data products.excalidraw.light](Data%20products.excalidraw.light.svg)

### What is a Data Product?

---

![bg 80%](What%20are%20Data%20Products.excalidraw.light.svg)

<!--
- Data outlives technology and organisation, and therefore
* Data products are abstract
	* Decoupled from technology/implementation
	* Metadata driven
* Machine readable is nice:
	* generation
	* interaction
	* maintenance
-->

---

A bit of clarification...

---

#### NORA &mdash; MIM Conceptual Framework
<style scoped>
ul { padding-inline-start: 0 }
</style>
  ![width:700px](MIM%20Conceptual%20Framework.excalidraw.light.svg)
<!-- Mention RFC3444-->
* #### The CIM
   ![width:700px](RFC3444%20Variant.excalidraw.light.svg)

<!--
* reusable definitions
* proper model serialization for code generation and CI/CD solutions
* accessible and easy to maintain documentation of definitions and models
* expressive modeling languages to cover all needs
-->

### How Do We Model Data Products?

## Sparx EA

![bg 50% opacity:1.0](Sparx%20EA%20Header%20BG.excalidraw.light.svg)

### Modeling workflow

---

![bg 70%](Sparx%20EA.excalidraw.light.svg)

---

![bg 70%](Sparx%20EA%200.excalidraw.light.svg)

---

![bg 70%](Sparx%20EA%201.excalidraw.light.svg)

<!--
#### Models are not textual

* Making changes is tedious
* No access to many tools to help
	* text editors
	* search and manipulation tools
	* language servers
* Version control and collaboration are non-trivial

#### Model serialization is complex

* Native formats couple you tightly to EA
	* but standardized formats (like XMI) have limitations and issues
* We practically have vendor lock-in

#### The metamodel is UML and only UML

* No
	* top-level slots and individuals, preventing re-use of definitions of attributes and relations
	* multiple inheritance or mixins
	* support for global identifiers
	* support for other metamodels than UML

- Because of the lack of slots, one cannot simply re-use a `name`, but must use complicated inheritance structures to obtain it, or rely on stereotypes. Compare this to how simple RDFS and LinkML make this
-->

---

Sparx EA and UML offer no support for Linked Data in models
no support for slots


### Why Use Sparx EA?

* Normative model of the CIM
* Accessible and feature rich

---

But that shouldn't suffice

### Further shortcomings

* No global, namespaced identifiers


----

#### Schema and documentation generation

* Need to start expensive and heavy application to do generation
	* so it cannot be run from a CI/CD pipeline for instance
* No freedom of choice in what programming language you use
	* and limited choice in development tools

### How do we overcome these challenges?

## The Semantic Web

![bg 30%](Semantic%20Web%20Header%20BG.excalidraw.light.svg)

<!-- NOTE:
- Mention the fear of text, and how developers are working with gigantic models. It's actually better for overview, since it's not a mess with more than a few classes, and you can search and filter and transform text easily.
-->

### Modeling overview

---

![bg 70%](Semantic%20Web%20flowchart.excalidraw.light.svg)

---

![bg 70%](Semantic%20Web%20flowchart%202.excalidraw.light.svg)

### Why use Semantic Web technology?

---

It solves many of the issues with Sparx EA
* but introduces new ones

---

#### Everything is plain text

---

* Self-documenting
* Global identifiers using URIs
	* enabling Linked Data
* Graph
* Language tagged literals (langstrings)



## LinkML: The Actual Savior
* Mention how it replaces CIMTool as well
<!-- https://cimtool.ucaiug.io/ -->

## Roadmap
* LinkML Profiler
* LinkML Language Server
* The entire CIM in LinkML schemas

## Demo (5 min)
* Showcase: EN-TSO-E CGMES profiles in LinkML
	* Generated documentation
	* Live generation of Pydantic, JSON Schema and SQL DDL
