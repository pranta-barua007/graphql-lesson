import { InMemoryCache } from "@apollo/client";
import { cartReactiveVars } from "./cart/cart.var";
import { directoryReactiveVars } from "./directory/directory.var";
  
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ...cartReactiveVars,
        ...directoryReactiveVars,
      },
    },
  },
});
