import { makeVar } from "@apollo/client";

export const currentUserVar = makeVar(null);

export const userReactiveVars = {
  currentUser: {
    read() {
      return currentUserVar();
    },
  },
};
