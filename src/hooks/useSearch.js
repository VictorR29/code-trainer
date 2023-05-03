import { useState } from "react";

const useSearch = (initialProducts,  keys) => {
  const [searchValue, setSearchValue] = useState("");

  const valueChange = (value) => {
    setSearchValue(value);
  }

  const result = !searchValue 
    ? initialProducts 
    : initialProducts.filter((searchItem) => 
        keys.some(key => searchItem[key].toLowerCase().includes(searchValue.toLowerCase()))
      );

  return { searchValue, valueChange, result };
};

export { useSearch };