import React from "react";
import App from "./App";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../client/user/user.queries";
import { setCurrentUser } from "../client/user/user.mutations";

const AppContainer = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  return (
    <App
      currentUser={data.currentUser}
      setCurrentUser={setCurrentUser}
    />
  );
};

export default AppContainer;
