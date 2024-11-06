import Dropdown from "./Dropdown";
import NavbarButtons from "./NavbarButtons";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <div className="pt-10 flex justify-between">
      <Dropdown />
      <NavbarLinks />
      <NavbarButtons />
    </div>
  );
};

export default Navbar;
