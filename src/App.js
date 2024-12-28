import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import PageError from "./pages/pageError/PageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <PageError />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
