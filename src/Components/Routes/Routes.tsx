import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
]);
export default router;
