import "reflect-metadata";
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import dataSource from "./utils";
import UserResolver from "./resolver/UserResolver";

const port = 5000;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  const schema = await buildSchema({ resolvers: [UserResolver]})
  const server = new ApolloServer({schema})
  try {
    const { url }: { url: string} = await server.listen({port})
    console.log(`Server ready at ${url}`)
  } catch(err) {
    console.log("Error starting the server")
  }
};

void start();