import React from "react";
import { BackButton } from "../../GlobalStyles/BackButton";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";

const List = () => {
  return (
    <>
      <BackButton to="/">⏴</BackButton>
      <ListOfProducts />
    </>
  )
}

export { List };