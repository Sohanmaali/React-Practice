import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./index.css";
import LayOut from "./components/LayOut.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import GitHub, { gitHubLoader } from "./components/GitHub.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayOut />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contect", element: <Contact /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contect" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={gitHubLoader} path="github" element={<GitHub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
