API of Ice and Fire GraphQL Wrapper
=====================

A major update of @afram wrapper around the [Game of Thrones API](http://anapioficeandfire.com) built using GraphQL.

> `This implementation is heavily inspired (read copious amounts of copy and paste) by Facebook's own wrapper around [SWAPI](http://swapi.co),
which can be found on the [swapi-graphql](https://github.com/graphql/swapi-graphql) Github page`

Uses:

* [graphql-http](https://github.com/graphql/graphql-http) - Simple, pluggable, zero-dependency, GraphQL over HTTP spec compliant server, client and audit suite.
* [DataLoader](https://github.com/facebook/dataloader) - for coalescing and caching fetches.


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

A local express server is in `./src/cloud`. It can be run with:

```sh
npm start
```

Hit the server with Postman or similar tools at `http://localhost:{PORT}/graphql`

NOTE: example of graphql request body:
```json
{
    "query": "{ houses { name } }"
}
```