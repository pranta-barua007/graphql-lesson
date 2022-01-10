import { makeVar } from "@apollo/client";

export const cartHiddenVar = makeVar(false);
export const cartItemsVar = makeVar([]);

export const cartReactiveVars = {
  cartHidden: {
    read() {
      return cartHiddenVar();
    },
  },
  cartItems: {
    read() {
      return cartItemsVar();
    },
  },
}
