import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <div className="content-wrapper md:pb-10 pb-5">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
