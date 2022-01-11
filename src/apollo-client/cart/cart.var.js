import { makeVar } from "@apollo/client";

export const cartHiddenVar = makeVar(true);
export const cartItemsVar = makeVar([]);
export const cartItemCountVar = makeVar(0);

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
  cartItemCount: {
    read() {
      return cartItemCountVar();
    },
  },
}
