import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./index.css";

function App() {
  return (
    <div className="">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
