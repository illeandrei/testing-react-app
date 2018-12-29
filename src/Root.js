import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers"; //importing a dir will return the index.js file

export default ({ children, initialState = {} }) => (
  <Provider store={createStore(reducers, initialState)}>{children}</Provider>
);
