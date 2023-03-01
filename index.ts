import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { resolvers } from './prisma/generated/type-graphql';

const prisma = new PrismaClient();

const functionBuildSchema = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      ...req,
      prisma,
    }),introspection:true
  });

  server.listen(process.env.PORT || 4000).then(({ url }) => console.log(`Server running at ${url}`))
  .catch((error) => console.error(error));
};

functionBuildSchema();