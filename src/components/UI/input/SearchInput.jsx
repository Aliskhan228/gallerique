import { useContext } from "react";
import styles from "./SearchInput.module.scss";
import { Input } from "antd";
import { HomeContext } from './../../../pages/Home';

const SearchInput = () => {
  const { query, setQuery } = useContext(HomeContext);

  return (
    <Input
      type="text"
      placeholder="Search..."
      className={styles.searchInput}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
