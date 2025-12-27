---
date: 09-11-2024
draft: true
tags:
    - linkml
    - informationmodeling
---

# Introduction

# Use cases for LinkML

## When LinkML is a good choice
* Logical data modeling
    * Development of services and applications
## When LinkML may not be the best choice
* Conceptual data modeling

# Strenghts

# Weaknesses

# Modeling guide

## Key insights
#### Attributes are slots

#### Schema imports can fail due to name collisions

#### All elements are top-level and in the global namespace

#### URI mappings are only annotations












---




# Issues
* Schemas don't have namespaces so import mechanism is unreliable.
* All elements share the same global namespace, contrary to what is suggested by the familiar tree-shaped YAML syntax and OO semantics.
* Attributes are actually inlined slots, so local definitions are actually global.
    * However, name mangling occurs with a class prefix and a double underscore. This doesn't seem to be implemented in most generators though.
* Unclear semantics.
    * Formal definition is work-in-progress.
    * Reference implementation is messy and unreliable.
* The fundamental code is messy, inconsistent and unreliable.
    * All sorts of magic behavior and non-explicit defaults.
    * Lots of duplicate code.
    * Inconsistent implementations and style.
* Lack of modularity at the code architecture level.
    * Linter and generators are all part of the core module.
* Complicated semantics at times
    * Slot usage is an example:

```yaml
classes:
  Person:
    slots:
      - person_id
    slot_usage:
      person_id:
        multivalued: true
    attributes:
      name:
        range: string
slots:
  person_id:
    range: string
```

Desired:
```yaml
classes:
  Person:
    slots:
      name:
        range: string
      person_id:
         multivalued: true
slots:
  person_id:
    range: string
```

* Generators are rigid and quality is very varying.
    * Completely inconsistent behavior can occur.
    * Not a lot of things are configurable.

# Way forward
* Determine what language features we like, and which ones we don't like.