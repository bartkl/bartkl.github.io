---
marp: true
headingDivider: 3
theme: default
size: 16:9
style: |-
  /* Using the Takashi method. */
  section {
    font-family: "Fira Sans";
    font-size: 1.4rem;
  }
  h1 { font-size: 2.2rem; }
  h2 { font-size: 1.9rem; }
  h3 { font-size: 1.7rem; }
  h4 { font-size: 1.5rem; }
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

# CIM Data Products and Linked Data with LinkML
<!-- _class: lead -->
<!-- _backgroundImage: unset -->

###### Bart Kleijngeld | May 16th, 2024

![bg cover opacity:0.35](scott-webb-mV9-1XjnM4Y-unsplash.jpg)

## Hello
 :wave:

![bg contain](ik.png)
* Bart Kleijngeld
	* Software Developer
	* Data Architect

## Agenda

TODO.

1) Data Mesh and Modeling Challenges
2) Sparx EA and UML: Why The CIM Is Hard To Use
3) RDF: The Complicated Hero
4) LinkML: The Actual Savior

## Data Mesh and Modeling Challenges
<!-- _class: lead -->
<!-- // _backgroundImage: unset -->

### What is Data Mesh?

---

![Data Mesh Core Principles.excalidraw.light](Data%20Mesh%20Core%20Principles.excalidraw.light.svg)

* Socio-technical architecture
* Decentralized and bottom-up
* Empowers developers
* High reliance on metadata to work

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
-->

* The CIM is a 


### Modeling Data Products

---
- data products correspond with logical data models
* terms should be (re)used from vocabularies
	* especially standards
* physical data models are technical implementations

---

#### MIM Conceptual Framework
<style scoped>
ul { padding-inline-start: 0 }
</style>
  ![width:700px](MIM%20Conceptual%20Framework.excalidraw.light.svg)
<!-- Mention RFC3444-->
* #### The CIM
   ![width:700px](RFC3444%20Variant.excalidraw.light.svg)

---

What to use for modeling?

<!--
* reusable definitions
* proper model serialization for code generation and CI/CD solutions
* accessible and easy to maintain documentation of definitions and models
* expressive modeling languages to cover all needs
-->


## Sparx EA

---


![[Data Product as Profile.excalidraw.light.svg]]



![Data product logical modeling.excalidraw.light](Sparx%20EA%20Header%20BG.excalidraw.light.svg)

* cannot refer to vocabularies not built in EA
	* linkml/rdf decouple tools from language
	* and it's really easy to transform code
* have to start heavy and expensive tool to access generators

### How We Approach Modeling

---

---


Needs Information Standardization

## Sparx EA and UML: Why The CIM Is Hard To Use

## RDF: The Complicated Hero

## LinkML: The Actual Savior


## Modeling
![bg 70%](CIM%20Users%20Group%202024%20-%20CIM%20Data%20Products%20and%20Linked%20Data%202024-02-02%2015.53.19.excalidraw.light.svg)
