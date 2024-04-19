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
import Contacts from "./pages/Contacts/Contacts";
import AddCard from "./pages/AddCard/AddCard";
import Profile from "./pages/Profile/Profile";

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
  {
    path: Paths.contacts,
    element: <Contacts />,
  },
  {
    path: Paths.addCard,
    element: <AddCard />,
  },
  {
    path: Paths.profile,
    element: <Profile/>,
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
