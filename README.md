An API of Ice and Fire GraphQL Wrapper
=====================

A wrapper around the [Game of Thrones API](http://anapioficeandfire.com) built using GraphQL.

This implementation is heavily inspired (read copious amounts of copy and paste) by Facebook's own wrapper around [SWAPI](http://swapi.co),
which can be found on the [swapi-graphql](https://github.com/graphql/swapi-graphql) Github page

Uses:

* [graphql-js](https://github.com/graphql/graphql-js) - a JavaScript GraphQL runtime.
* [DataLoader](https://github.com/facebook/dataloader) - for coalescing and caching fetches.
* [express-graphql](https://github.com/graphql/express-graphql) - to provide HTTP access to GraphQL.


## Getting Started

Install dependencies with

```sh
npm install
```

## Game of Thrones Wrapper

The GOT API wrapper is in `./schema`. It can be tested with:

```sh
npm test
```

## Local Server

A local express server is in `./server`. It can be run with:

```sh
npm start
```

Hit the server with Postman or similar tools at `http://localhost:3000/graphql`

NOTE: example of graphql request body:
```json
{
    "query": "{ houses { name } }"
}
```