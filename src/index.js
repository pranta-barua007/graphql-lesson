import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo-client/client";

import "./index.css";
import { default as App } from "./App/App.container";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
