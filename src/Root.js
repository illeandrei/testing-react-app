import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';
import reducers from "reducers"; //importing a dir will return the index.js file

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return <Provider store={store}>{children}</Provider>
};
