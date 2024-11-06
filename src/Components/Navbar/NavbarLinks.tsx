import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div>
      <ul className="flex gap-5 font-normal text-base justify-center text-center">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
