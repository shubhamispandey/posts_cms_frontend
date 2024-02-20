import React, { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import Filter from "../Filter/Filter";
import styles from "./SearchAndFilter.module.css";
import { setSearchText } from "../../redux/Slices/searchAndFilterSlice";

const SearchAndFilter = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChangeSearchText = (e) => {
    setInput(e.target.value);
  };
  const handleKeyUp = () => {
    var timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const searchText = e.target.value;
        dispatch(setSearchText(searchText));
      }, 1000);
    };
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Search}>
        <SearchOutlined className={styles.SearchIcon} />
        <input
          type="text"
          placeholder="Search by Post Name"
          value={input}
          onChange={handleChangeSearchText}
          onKeyUp={handleKeyUp()}
          className={styles.SearchInput}
        />
      </div>
      <div className={styles.Filter}>
        <Filter />
      </div>
    </div>
  );
};

export default SearchAndFilter;
