import { useContext } from "react";
import styles from "./SearchInput.module.scss";
import { Input } from "antd";
import { QueryContext } from './../../../pages/Home';

const SearchInput = () => {
  const { query, setQuery } = useContext(QueryContext);

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
