import { MenuOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import SearchForm from "./UI/searchForm/SearchForm";
import { useState } from "react";

const Header = () => {
  const [isNavOpend, setIsNavOpened] = useState(false);

  const handleOnMenuButtonClick = () => {
    setIsNavOpened(true);
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
          <div className="header__icons">
            <MenuOutlined onClick={() => handleOnMenuButtonClick()} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
