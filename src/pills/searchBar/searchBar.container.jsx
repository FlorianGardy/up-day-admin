import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBarView from "./searchBar.view";
import { updateSearchValue, resetSearchValue } from "./searchBar.action";
import { getSearchValue } from "./searchBar.selector";

const SearchBar = ({ searchValue, updateSearchValue, resetSearchValue }) => {

  useEffect(() => {
    resetSearchValue();
  }, [resetSearchValue]);

  return (
      <SearchBarView value={searchValue} handleChange={updateSearchValue} />
  );
};

const mapDispatchToPros = dispatch => {
  return {
    updateSearchValue: (newValue) => dispatch(updateSearchValue(newValue)),
    resetSearchValue: () => dispatch(resetSearchValue())
  };
};

const mapStateToProps = state => ({
  searchValue: getSearchValue(state)
});


export default connect(
  mapStateToProps,
  mapDispatchToPros
)(SearchBar);
