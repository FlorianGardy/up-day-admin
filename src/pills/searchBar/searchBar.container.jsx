import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchBarView from "./searchBar.view";
import { updateSearchValue, resetSearchValue } from "./searchBar.action";
import { getSearchValueSelector } from "./searchBar.selector";

const SearchBarContainer = ({
  searchValue,
  updateSearchValue,
  resetSearchValue
}) => {
  useEffect(() => {
    resetSearchValue();
  }, [resetSearchValue]);

  return <SearchBarView value={searchValue} handleChange={updateSearchValue} />;
};

SearchBarContainer.propTypes = {
  searchValue: PropTypes.string.isRequired
};

const mapDispatchToPros = dispatch => ({
  updateSearchValue: newValue => dispatch(updateSearchValue(newValue)),
  resetSearchValue: () => dispatch(resetSearchValue())
});

const mapStateToProps = state => ({
  searchValue: getSearchValueSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(SearchBarContainer);
