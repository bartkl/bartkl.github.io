---
date: 2022-09-03
tags:
    - data-architecture/avro-schema
    - data-architecture/schema-evolution 
---

Say you work as a cashier at McDonald's, and a customer talks very unclearly. You can make out the words "medium-sized" and "mayonaise", but the third word is unintelligible. The English language acting as our schema, validation would reject the message. However, when I check our menu, there's only one item that can be ordered with mayonaise in medium size: french fries! 

This is an example of full recovery of the happy path from partial information that wouldn't have been possible with validation in our schema.

The point of this analogy is this:

The purpose of messaging is getting information across, so given a schema, a sender should try to send as much as he is able to, and a receiver should try to read and interpret as much as he is able to.

This way we enable ourselves to flexibly handle the situation at the last moment, i.e. that context-rich moment where we know the most and really need to take action.