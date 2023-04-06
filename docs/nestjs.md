# nestjs
## 1. introduction
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side application
## 2. CRUD generator
+ Generate a module (`nest g mo`) to keep code organized and establish clear boundaries (grouping related components)
+ Generate a controller (`nest g co`) to define CRUD routes (or queries/mutations for GraphQL applications)
+ Generate a service (`nest g s`) to implement & isolate business logic
+ `nest g resource` command not only generates all the NestJS building blocks (module, service, controller classes) but also an entity class,as well as DTO classes.

## 3 Controllers
Controllers are responsible for handling incoming requests and returning responses to the client.


#### DTO (Data Transfer Object) schema
A DTO is an object that defines how the data will be sent over the network. 