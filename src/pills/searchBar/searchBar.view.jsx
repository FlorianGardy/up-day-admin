import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const SearchBarView = ({ handleChange, searchValue }) => {
  return (
    <Input
      icon="search"
      placeholder="Chercher un identifiant"
      value={searchValue}
      onChange={e => handleChange(e.target.value)}
    />
  );
};

SearchBarView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string
};

export default SearchBarView;
