import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import "./assets/index.scss";
import App from "./App";
import CartProvider from "./CartProvider";
import {AppProvider} from "./context/AppContext";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <CartProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CartProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
