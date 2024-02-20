import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { setTogglePostsFilter } from "../../redux/Slices/searchAndFilterSlice";
import "./Filter.css";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleToggle = (event, newFilter) => {
    dispatch(setTogglePostsFilter(newFilter));
  };

  return (
    <ToggleButtonGroup
      value={filter.togglePostsFilter}
      exclusive
      onChange={handleToggle}
      aria-label="Filter"
      color="secondary"
    >
      <ToggleButton value="all" aria-label="All Posts">
        ALL POSTS
      </ToggleButton>
      <ToggleButton value="mine" aria-label="My Posts">
        MY POSTS
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
