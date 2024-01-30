import { createSchema } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import resolvers from "./resolvers";

// Reading the schema.gql file
const schemaFile = readFileSync(join(__dirname, "schema.gql"), {
  encoding: "utf8",
  flag: "r",
});

const schema = createSchema({
  typeDefs: schemaFile,
  resolvers,
});

export default schema;
