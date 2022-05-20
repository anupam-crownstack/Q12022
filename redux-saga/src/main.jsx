import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./redux/catSlice";
import catSaga from "./sagas/catsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(catSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
