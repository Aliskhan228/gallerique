import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import SearchForm from "./UI/searchForm/SearchForm";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpend, setIsNavOpened] = useState(false);

  const handleOnMenuButtonClick = () => {
    setIsNavOpened(true);
  };

  const handleOnCloseClick = (e) => {
    e.stopPropagation();
    setIsNavOpened(!isNavOpend);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <h1 className="logo">Gallerique</h1>
          <section className="search-photo">
            <SearchForm />
          </section>
          <Navbar isNavOpend={isNavOpend} setIsNavOpened={setIsNavOpened} />
					<div
            className={`burger-menu ${isNavOpend ? "burger-menu_opened" : ""}`}
          >
            <div className="nav-wrapper">
              <div
                className="nav-overlay"
                onClick={(e) => handleOnCloseClick(e)}
              ></div>
              <nav className="nav">
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
          </div>
          <div className="header__icons">
            <MenuOutlined onClick={() => handleOnMenuButtonClick()} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
