import { useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-poppins py-4 relative">
      <div className="hidden md:flex justify-between items-center">
        <Logo />
        <NavbarLinks />
        <NavbarIcons />
      </div>

      <div className="flex justify-between md:hidden">
        <Logo />
        <button onClick={toggleMenu} className="focus:outline-none text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 w-full bg-white z-10">
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
