import { Outlet, useLocation } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useState } from "react";
import { createContext } from "react";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export const HomeContext = createContext({});

const Home = () => {
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const changePage = (page, limit) => {
    setPage(page);
    setLimit(limit);
  };

  let classNames = ["home"];

  if (location.pathname === "/") {
    classNames.push("index");
  }

  return (
    <HomeContext.Provider
      value={{
        query,
        setQuery,
        limit,
        page,
				setPage,
        totalPages,
        setTotalPages,
        changePage,
        breakpointColumnsObj,
      }}
    >
      <div className={classNames.join(" ")}>
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
