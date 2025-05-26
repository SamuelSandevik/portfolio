import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import About from "./pages/About";
import SingleProject from "./pages/SingleProject";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <SingleProject />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
