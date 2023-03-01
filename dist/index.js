"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const client_1 = require("@prisma/client");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const prisma = new client_1.PrismaClient();
const functionBuildSchema = async () => {
  const schema = await (0, type_graphql_1.buildSchema)({
    resolvers: type_graphql_2.resolvers,
    validate: false,
  });
  const server = new apollo_server_1.ApolloServer({
    schema,
    context: ({ req }) => ({
      ...req,
      prisma,
    }),
  });
  server
    .listen(process.env.PORT || 4000)
    .then(({ url }) => console.log(`Server running at ${url}`))
    .catch((error) => console.error(error));
};
functionBuildSchema();
