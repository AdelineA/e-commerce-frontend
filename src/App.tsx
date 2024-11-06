import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
