import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { YogaInitialContext, createYoga } from "graphql-yoga";
import schema from "./graphql/schema"

// Create the environment variables in the OS
dotenv.config();

const port = parseInt(process.env.APP_PORT ?? "8000");

const app: Application = express();

app.use(cors());

const yoga = createYoga({
  schema,
  graphiql: true,
  context: (req: YogaInitialContext) => {
    return req;
  },
});

app.use(yoga.graphqlEndpoint, yoga);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}/graphql`);
});
