---
date: 2022-12-22
tags:
    - programming 
---

Exceptions receive a lot of hate in the Functional Programming "community" it seems, of course with the exception (no pun intended) of Clojurians. I want to share some of my thoughts on this here.

### Alleged issues with exceptions
Things to watch out for with exceptions:
* it can lead to complicated (spaghetti) execution flows, just like with `goto` blocks
* they are effects that ruin referentially transparency
* it is often unclear what exceptions need to be expected when trying some call, especially since deeper function calls may also have exceptions propagate up the call stack

Look at it this way: exceptions, by design, can be left unhandled and are allowed to propagate upwards on the call stack. Unhandled exceptions are side effects from the perspective of the calling function which doesn't handle the exception. Also, handling can occur at any point, which causes the spaghetti code flow.

### What error monads do better
Error monads like `Either` solve all of the issues mentioned above. They are referentially transparent, and assuming type safety in the language, all possible variants of the error type must be handled, so that you know exactly what to expect, and handling should occur *immediately*, i.e.: there is no default propagation as is the case with exceptions.

This guarantee is transitive: since callers have to handle every possible error (and success) type, at every level of your call stack you know exactly what can occur and how to handle it. The entire system becomes easier to reason about.

### When exceptions are good
Guillaume Bogard suggests we divide errors up in two categories:
- *technical errors*: errors of a technical nature that *have no path of resolution for the user*. Execution should be terminated because of it, and developers should look at the problem.
- *business errors*: errors that relate to the domain *for which execution paths can be provided that allow the user to correct the path*.

Exceptions are great for representing technical errors. No matter where they occur, they will propagate upwards and optionally be handled by some top-level handler that might do something useful for the developers before execution is terminated, such as formatting the error message, or obtaining the stack trace to be included. Who knows one might want to trigger sending an e-mail. The point is: since there are no execution paths within the business logic, termination and diagnostis by the developers is desired.

For all other errors, i.e. those which we can handle without having to terminate, and provide reasonable execution paths for, it seems error monads are preferred.

### But what about referential transparency?
It's all nice and well to have this neat classification of errors and ways to deal with them, but something needs to be addressed.

Let's say you implemented error handling as suggested: exceptions handle technical errors at the top-level of your code, and all business errors are modeled using error monads. The astute reader might point out then, that because of letting exceptions propagate all the way to the top-level, this renders all of the functions in between impure, since there may be the side effect of an unhandled exception falling through:

```clojure
(defn first []
  (second))  ;; Impure: exception from `third` might occur
  
(defn second []
  (third))   ;; Impure: exception from `third` might occur

(defn third []
  (throw (Exception. "Something went wrong.")))
```

This seems to be very costly, but when you step back and review the intended design here, you'll see that in reality not much is lost at all.

Technically speaking, it is true that `first` and `second` aren't referentially transparent anymore. However, because by design we handle exceptions only at the top-level, and it is followed by execution termination, we can safely say that *if* an exception occurs it never affects those functions. The behavior of all the intermediate functions through which the unhandled exception can fall is unaffected by it, since the exception either terminates the entire run or doesn't occur at all.  So for all intents and purposes, these functions are virtually referentially transparent.

Those who consider this insufficient might want to consider power outages and other *exceptional* circumstances that can cause termination. Referential transparency doesn't reach that far, so one must ask how far it should reach for it to be useful. Personally, the only difference I see between the power outage and some exception which gets handled at the top-level (only), is the fact that handler can do something prior to termination, and this difference is hardly relevant.

This is a great example of favoring being pragmatic over being correct. We pretty much get the entire benefit of referential transparency, the only caveat being that we have to make sure we follow the conventions well, without having to sacrifice a tool that's perfect for the job of handling technical errors, so that we don't have to come up with more complicated or maintenance heavy solutions that respect referential transparency at the more strict level.

### Are exceptions bad?
In the Clojure world, exceptions are the standard way to handle errors. There are some popular third-party libraries that offer the monadic approach to handling errors, so really the coice is up to you. It is interesting to note that exceptions aren't thought to be so bad in the Clojure community. Be sure to read the Clojureverse post below for an excellent discussion.

The way I currently feel about it is that Bogard's distinction between using exceptions for technical errors, and error monads for business errors is probably the best approach.

However, in a pragmatic language like Clojure, it seems people really don't have that bad an experience with exceptions, which is why I intend to try getting the job done with them before introducing error monads.

One reason exceptions in Clojure aren't as tedious as in some other languages is because Clojure encourages using a data oriented approach to the use of them through `ex-info`. I quote:

>In Java it’s common to create many custom exception subclasses corresponding to all manner of contingencies. Often these are built in deeply nested exception hierarchies. In practice, the majority of these exception classes add little value beyond their specific class name, which can be caught and handled.
>
>In Clojure, we instead have a single custom exception class provided with the language (IExceptionInfo), which carries a map of data where you can place any information that’s necessary or useful to handle the error.

(*Programming Clojure, Third Edition*, p. 232)

### Conclusion
Use exceptions if an error occurs that should terminate execution because of undefined or unsafe behavior, and make sure to include lots of diagnostic information so developers can have a decent shot at it.

Otherwise, either use error monads such as `Either`, or some other way to handle error paths. It is a very well-defined and battle-tested way, but perhaps in Clojure there's more pragmatic or data oriented ways to solve the same problem, for example using the spec library.

This way we virtually get referential transparency and explicit modeling of our business errors alongside other domain data, and use exceptions for what they are good at, which is providing a way to handle technical errors at the top-level, no matter where it occurs.

## Reads
- [Exceptions are just fancy gotos](https://belaycpp.com/2021/06/16/exceptions-are-just-fancy-gotos/)
- [Clojureverse - Error handling in clojure](https://clojureverse.org/t/error-handling-in-clojure/1877)
- [Functional error handling with monads, monad transformers and Cats MTL](https://guillaumebogard.dev/posts/functional-error-handling/)
- [Programming Clojure, Third Edition](https://pragprog.com/titles/shcloj3/programming-clojure-third-edition/)
