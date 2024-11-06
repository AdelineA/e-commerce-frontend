import { NavLink } from "react-router-dom";

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
      <ul className="flex flex-col md:flex-row gap-5 font-normal text-base justify-center text-center">
        {navLinks.map((link) => (
          <li key={link.title} className="hover:underline">
            <NavLink
              to={link.target}
              end
              className={({ isActive }) =>
                isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
