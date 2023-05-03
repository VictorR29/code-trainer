import React from "react";
import { ProductSearch } from "../../components/ProductSearch/ProductSearch";
import { BackButton } from "../../GlobalStyles/BackButton";
import { FmContainer } from "./styles";

const FreeMode = () => {
  return (
    <FmContainer>
      <BackButton to="/">⏴</BackButton>
      <ProductSearch />
    </FmContainer>  
  )
}

export { FreeMode };