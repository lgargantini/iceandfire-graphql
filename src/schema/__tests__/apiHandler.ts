import gotSchema from "..";
import { graphql } from "graphql";

export async function graphqlHandler(query): Promise<any> {
  var result = await graphql({ schema: gotSchema, source: query });
  if (result.errors !== undefined) {
    throw new Error(JSON.stringify(result.errors, null, 2));
  }
  return result;
}
