import React from "react";
import PropTypes from "prop-types";
import { Search } from "./styles";

const SearchBar = ({ value, onChange, placeholder }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Search type="text" value={value} onChange={handleInputChange} placeholder={placeholder}/>
  )
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export { SearchBar };