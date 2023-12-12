import { Outlet, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotosByQuery } from "../store/slices/photosSlice";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export const QueryContext = createContext("");
export const HomeContext = createContext({});

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const searchedPhotosStatus = useSelector(
    (state) => state.photos.searchedPhotos.status
  );

  const handleOnSearchClick = () => {
    if (query === "") return;

    navigate("/gallery/search");
    if (searchedPhotosStatus === "idle") {
      dispatch(getPhotosByQuery({ limit, page, query }));
    }
    setPage(1);
  };

  const changePage = (page, limit) => {
    setPage(page);
    setLimit(limit);
  };

  return (
    <HomeContext.Provider
      value={{
        limit,
        page,
        totalPages,
        setTotalPages,
        changePage,
        handleOnSearchClick,
        breakpointColumnsObj,
      }}
    >
      <QueryContext.Provider value={{ query, setQuery }}>
        <div className="home">
          <Header />
          <div className="main">
            <Outlet />
          </div>
          <Footer />
        </div>
      </QueryContext.Provider>
    </HomeContext.Provider>
  );
};

export default Home;
