import { CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Navbar = ({ isNavOpend, setIsNavOpened }) => {
  const handleOnCloseClick = (e) => {
    e.stopPropagation();
    setIsNavOpened(!isNavOpend);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-overlay" onClick={(e) => handleOnCloseClick(e)}></div>
      <nav className={isNavOpend ? "nav nav_opened" : "nav"}>
        <CloseOutlined
          onClick={(e) => handleOnCloseClick(e)}
          className="nav__close-icon"
        />
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
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link_active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
