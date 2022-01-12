import { 
    ApolloClient, 
    createHttpLink,  
} from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";

const httpLink = createHttpLink({
    uri: "https://crwn-clothing.com",
});
  
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: cache,
    typeDefs,
    connectToDevTools: true
});
