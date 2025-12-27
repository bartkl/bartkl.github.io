---
date: 2024-09-28
tags:
    - information-modeling
    - semantic-web
draft: true
---


Input:

Bart Kleijngeld, [9/28/24 8:23 PM]
LinkML:
• class and slot URIs: thing (shape) itself or target class?
• generate SHACL.and find out
  • try out generator parameters to do with URIs
• it's as if you're referring from Python to some Java class: different languages! And here it's even worse b/c diff semantics/layers

Bart Kleijngeld, [9/28/24 8:32 PM]
OWL:
• NUNA: same things get modeled around the world with all sorts of names, important to support in an OWA
• CWA: often no NUNA to simplify
• de pizzas blijven ont:Pizza instantie, dus als je weet dat dat disjunct is met foaf:Person, dan is het dus fout
• domain pas toevoegen in ontologie als je weet wat voor inferenties je wil kunnen maken

Bart Kleijngeld, [9/28/24 8:55 PM]
Volgens mij:
PizzaShape eist minstens 1 value voor name
  =>
Pizza niet disjunct met domain(name)

Anders krijg je namelijk dat je SHACL een datapunt goedkeurt dat een tegenspraak oplevert, namelijk: calzone is Person en ook Pizza (terwijl disjunct)

Bart Kleijngeld, [9/28/24 8:59 PM]
Dus enerzijds "connectie" tussen target class in SHACL shape en domain in OWL

Bart Kleijngeld, [9/28/24 8:59 PM]
Maar: soms kan de verhouding van de Pizza en Person class afhankelijk zijn van de ontologie. Dus het is altijd context!

Bart Kleijngeld, [9/28/24 9:43 PM]
Je SHACL moet geen zaken goedkeuren die leiden tot inconsistenties met de ontologieën die je gebruikt (vooral de leidende van de defs)

Bart Kleijngeld, [9/28/24 9:47 PM]
Als.je wil valideren dat een UUID 13 lang is, wil je dan die validatieregel af kunnen leiden uit een OWL restriction die per def de lengte op 13 houdt?

Bart Kleijngeld, [9/28/24 9:48 PM]
De vraag is duidelijk: waarom in SHACL herhalen als de conceptuele def. dit al zegt?? 

^ hier moet je iets mee

Bart Kleijngeld, [9/28/24 9:50 PM]
Het is niet dezelfde informatie:
OWL: als lengte = 13 ... => is UUID
shacl: als UUID dan lengte 13

^ beter uitdenken/uitwerken

---

## When SHACL shapes are incompatible with ontologies

Suppose I have a property defined as follows:

```yaml
ont:name
    a rdf:Property ;
    rdfs:domain ont:Person ;
    rdfs:range xsd:string .
```




### Property domains and SHACL target classes

#### Ontology

```ttl
ont:Pizza a rdfs:Class .
ont:Person a rdfs:Class .

ont:name
    a rdf:Property ;
    rdfs:domain ont:Person ;
    rdfs:range xsd:string .
```

#### Application profile

```ttl

app:Pizza
    a sh:NodeShape ;
    sh:targetClass ont:Pizza ;
    sh:property [
        sh:path ont:name ;
        sh:minCardinality 1 ;
        sh:datatype xsd:integer
    ] ;
```

### Analysis
At first glance, this seems modeled plain wrong. In the ontology we are claiming `ont:name` applies only to persons, but in the profile we express the `ont:name` property as a required attribute for instances of `ont:Pizza`.

Before drawing definitive conclusions, however, let's evaluate what we've expressed more formally. Consider the following example instance data:

```ttl

:calzone
    a ont:Pizza ;
    ont:name "pizza calzone" .
:bart ont:name "Bart" .
```

Validating this data using the SHACL shapes graph, the individual `:bart` is ignored. `:calzone` is validated against the `app:Pizza` shape, and satisfies the minimum cardinality constraints on the `ont:name` property. Validation succesful!

Then, from the ontology point of view, reasoning would infer the following additional statements:

```ttl

:calzone a ont:Person .
:bart a ont:Person .
```

No one is surprised that `:bart` is a person, but now we know that `:calzone` is both an instance of `ont:Pizza` and of `ont:Person`. Intuitively, this seems wrong. But we must be very careful in drawing conclusions here.

There's several situations that could be the case here:
* It's possible `ont:Person` and `ont:Pizza` are equivalent classes. Our current ontology does not state this, but it's very possible that in some context this *is* true. Some consumer of this data might have this stated in their ontology.
* In some context the classes are disjoint. In this case we have an actual contradiction.
