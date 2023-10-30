import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {App} from "./App.tsx";
import {store} from "../store/stor.ts";
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
