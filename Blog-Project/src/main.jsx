import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      {/* <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contect" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={gitHubLoader} path="github" element={<GitHub />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
