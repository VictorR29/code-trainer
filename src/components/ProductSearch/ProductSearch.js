import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { useSearch } from "../../hooks/useSearch";
import { useProductSearch } from "../../hooks/useProductSearch";
import { SearchBar } from "../SearchBar/SearchBar";
import { ProductContainer, Product } from "../../GlobalStyles/ProductContainer";
import { Button } from "../../GlobalStyles/Button";
import { LoadingText, LoadingWrapper, Loader  } from "../../GlobalStyles/AnimationLoader"

const ProductSearch = () => {
  const { products } = useProducts();
  const { searchValue, valueChange, result } = useSearch(products, ["code"]);
  const { searchResult, handleResultClick, isLoading } = useProductSearch(result, searchValue);

  return(
    <>
      {
        isLoading ? (
          <LoadingWrapper>
            <Loader />
            <LoadingText>Comprobando...</LoadingText>
          </LoadingWrapper>
        ) : searchResult ? (
          <ProductContainer as="div"><Product>{searchResult}</Product></ProductContainer>
        ) : null
      }
      <SearchBar
        value={searchValue}
        onChange={valueChange}
        placeholder="Ingresa un codigo"
      />
      <Button onClick={handleResultClick}>
        Buscar
      </Button>
    </>
  )
}

export { ProductSearch }