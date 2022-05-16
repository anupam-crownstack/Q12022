import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProviderContext from "./context/TodoContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderContext>
    <App />
  </ProviderContext>
);
