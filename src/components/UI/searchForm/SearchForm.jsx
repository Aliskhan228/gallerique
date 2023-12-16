import Search from "antd/es/input/Search";
import { useContext } from "react";
import { HomeContext } from "../../../pages/Home";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPhotosByQuery } from "./../../../store/slices/photosSlice";

const SearchForm = () => {
  const { limit, page, query, setQuery, setPage } = useContext(HomeContext);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnSearchClick = () => {
    if (query === "") return;

    navigate("/gallery/search");
    dispatch(getPhotosByQuery({ limit, page, query }));
    setPage(1);
  };

  const handleOnClear = () => {
    navigate("/gallery");
    setQuery("");
  };

  return (
    <form className="search-photo-form">
      <Search
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search photos"
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
