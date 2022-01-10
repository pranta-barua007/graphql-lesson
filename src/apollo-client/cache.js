import {
    InMemoryCache,
} from "@apollo/client";
import { cartReactiveVars } from "./cart/cart.var";
  
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ...cartReactiveVars,
      },
    },
  },
});
