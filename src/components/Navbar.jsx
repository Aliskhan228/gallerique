import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link_active" : "nav-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/gallery"}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link_active" : "nav-link"
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to={"/contacts"}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link_active" : "nav-link"
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navbar;
