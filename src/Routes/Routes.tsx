import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/404";
import WishListPage from "../pages/WishList";
import DetailPage from "../pages/DetailPage";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        index: true,
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
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/:slug",
        element: <DetailPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
export default router;
