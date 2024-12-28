import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/projet",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
