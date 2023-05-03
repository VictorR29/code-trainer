import { useState } from "react";

const useProductSearch = (result, searchValue) => {
const [searchResult, setSearchResult] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const handleResultClick = () => {
  setIsLoading(true);
  const codeResult = result.find(product => product.code === searchValue)
    
  setTimeout(() => {
    setIsLoading(false);
    if(codeResult) {
      setSearchResult(codeResult.product)
    } else {
      setSearchResult("El codigo ingresado no existe");
    }
  }, 1500)
};

return { searchResult, handleResultClick, isLoading };
};

export { useProductSearch };