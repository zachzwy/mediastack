import { ApolloServer } from "apollo-server";
import { connectToDB } from "./mongooseConnection";

// Start the http server
const startServer = async () => {
  const { Media } = require("./mongodb");
  // GraphQL Types
  const typeDefs = `
    type Media {
      _id: ID!
      name: String
      imgLink: String
      homepage: String
      clickCount: Int
    }
    type Query {
      medias: [Media]
    }
    type Mutation {
      addMedia(input: UserInput): Media
    }
    input UserInput {
      name: String
      imgLink: String
      homepage: String
    }
  `;

  // GraphQL resolvers
  const resolvers = {
    Query: {
      medias: async () => {
        const res = await Media.find();
        return res;
      }
    },

    Mutation: {
      addMedia: async (root, args) => {
        const res = await Media.create(args.input);
        return res;
      }
    }
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
  });

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

// Connecting to DB and then start the server
const dbConnectAndStartServer = async () => {
  try {
    await connectToDB();
    console.log("Connected to Mongo successfully");
    startServer();
  } catch (err) {
    console.error(`Error connecting to mongo - ${err.message}`);
    process.exit(1);
  }
};

// Entry point
dbConnectAndStartServer();
