import Navbar from "./Navbar";
import SearchForm from './UI/searchForm/SearchForm';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <h1 className="logo">Gallerique</h1>
          <section className="search-photo">
            <SearchForm />
          </section>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
