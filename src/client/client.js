import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";
  
const GRAPHQL_API = process.env.REACT_APP_GRAPHQL_API 

export const apolloClient = new ApolloClient({
    cache: cache,
    uri: GRAPHQL_API,
    typeDefs: typeDefs,
    connectToDevTools: true
});
