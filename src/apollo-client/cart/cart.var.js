// import { cache } from "../cache";
import { makeVar } from "@apollo/client";

const cartDropdownInitialValues = {
  hidden: true,
  cartItems: [],
};

export const cartVar = makeVar(cartDropdownInitialValues);
