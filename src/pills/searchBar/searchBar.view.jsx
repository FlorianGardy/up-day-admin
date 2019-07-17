import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const PLACEHOLDER = "Chercher un identifiant";
const inputStyle = { width: "25vw" };

const SearchBarView = ({ handleChange, searchValue }) => {
  return (
    <Input
      icon="search"
      placeholder={PLACEHOLDER}
      value={searchValue}
      onChange={e => handleChange(e.target.value)}
      style={inputStyle}
    />
  );
};

SearchBarView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string
};

export default SearchBarView;
