import { ApolloServer, gql } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
    Query: {
        sayHello: () => {
            return 'Hello Level Up!';
        }
    }
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });


export const config = {
    api: {
        bodyParser: false
    }
};

module.exports = apolloServer.start().then(() => {
    return apolloServer.createHandler({ path: '/api/graphql' });
  });
