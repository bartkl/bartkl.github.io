---
date: 2023-07-02
tags:
    - semantic-web
    - information-modeling
---

Let's say I want to query the existence of something using SPARQL on a given data set. If matches are found, this means there are triples which state the truth about this existence, proving the existence regardless of whether I'm operating under the Open World Assumption (OWA) or Closed World Assumption (CWA).

However, now let's say I query for the *non*-existence of something. Under the OWA, simply because we have no statement on the existence of this something, doesn't mean it doesn't exist. Therefore, to make this operation useful with respect to our dataset (that which we know), SPARQL operates under the CWA here, so that whatever does not exist in our dataset, is assumed to just not exist. Note that with the OWA, any negated inquiry that way would lead to the answer "I don't know", which is not always practical in the context of retrieving information.

## References
- *Semantic Web for the Working Ontologist - James Hendler, Fabien Gandon, Dean Allemang*, ch. 6, pg. 146