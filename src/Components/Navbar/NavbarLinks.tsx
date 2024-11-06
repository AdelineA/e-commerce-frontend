import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    target: "/",
  },
  {
    title: "Contact",
    target: "/contact",
  },
  {
    title: "About",
    target: "/about",
  },
  {
    title: "Sign Up",
    target: "/signup",
  },
];
const NavbarLinks = () => {
  return (
    <div>
      <ul className="flex gap-5 font-normal text-base justify-center text-center">
        {navLinks.map((link) => (
          <li key={link.title} className="hover:underline">
            <Link to={link.target}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
