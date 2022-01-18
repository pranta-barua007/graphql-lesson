import {  ApolloClient } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";
  
export const apolloClient = new ApolloClient({
    cache: cache,
    uri: "https://crwn-clothing.com",
    typeDefs: typeDefs,
    connectToDevTools: true
});
