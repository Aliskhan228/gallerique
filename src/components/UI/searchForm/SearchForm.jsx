import Search from "antd/es/input/Search";
import { useContext } from "react";
import { HomeContext, QueryContext } from "../../../pages/Home";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const { query, setQuery } = useContext(QueryContext);
  const { handleOnSearchClick } = useContext(HomeContext);

  const navigate = useNavigate();

  const handleOnClear = () => {
		navigate('/gallery')
    setQuery("");
  };

  return (
    <form className="search-photo-form">
      <Search
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        onSearch={() => {
          handleOnSearchClick();
        }}
        onPressEnter={(e) => {
          e.preventDefault();
          handleOnSearchClick();
        }}
        style={{
          width: 400,
        }}
      />
      {query && (
        <span className="clear-button" onClick={() => handleOnClear()}>
          <span className="clear-icon material-symbols-outlined">cancel</span>
        </span>
      )}
    </form>
  );
};

export default SearchForm;
