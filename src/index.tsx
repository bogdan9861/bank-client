import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import store from "./app/store/store";

import "./assets/styles/reset.css";
import "./assets/styles/index.css";
import Main from "./pages/Main/Main";
import { Paths } from "./Paths";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Main />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router router={router}></Router>
    </Provider>
  </React.StrictMode>
);
