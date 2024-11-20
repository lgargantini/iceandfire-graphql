import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import schema from "../schema";

const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');