import {
    InMemoryCache,
} from "@apollo/client";
import { cartVar } from "./cart/cart.var";
  
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cart: {
          read() {
            return cartVar();
          },
        },
      },
    },
  },
});
