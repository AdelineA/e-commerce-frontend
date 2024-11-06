import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
