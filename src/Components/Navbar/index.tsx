import { useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-poppins py-4 relative">
      <div className="hidden xl:flex justify-between items-center">
        <Logo />
        <NavbarLinks />
        <NavbarIcons />
      </div>

      <div className="flex justify-between xl:hidden flex-wrap">
        <Logo />
        <div className="flex gap-5">
          <Search />
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden absolute top-16 w-full bg-white z-10">
          <div className="flex flex-col items-end space-y-4 p-2">
            <NavbarLinks />
            <NavbarIcons />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
