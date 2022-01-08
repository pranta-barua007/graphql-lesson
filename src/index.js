import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});

// client.writeQuery({
//   data: {
//     cartHidden: true,
//   },
// });


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
