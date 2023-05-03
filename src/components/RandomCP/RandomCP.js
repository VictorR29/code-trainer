import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { useRandomCP } from "../../hooks/useRandomCP";
import { Button } from "../../GlobalStyles/Button";
import { LoadingWrapper, Loader, LoadingText } from "../../GlobalStyles/AnimationLoader";
import { ProductContainer, Product } from "../../GlobalStyles/ProductContainer";
import { Correct, Incorrect, Container } from "./styles";

const RandomCP = () => {
  const { randomItem, isCorrect, searchValue, valueChange, loading, handleButtonClick } = useRandomCP(["code", "product"]);

  return (
    <>
      <Container>
        {
          loading ? (
            <LoadingWrapper>
              <Loader />
              <LoadingText>Buscando un item</LoadingText>
            </LoadingWrapper>
          ) : (
            <>
              {isCorrect === true && <Correct>Bien hecho!</Correct>}
              {isCorrect === false && <Incorrect>Vuelve a intentarlo</Incorrect>}
              <ProductContainer as="div">
                <Product>{randomItem}</Product>
              </ProductContainer>
            </>
          )
        }
      </Container>
      <SearchBar
        value={searchValue}
        onChange={valueChange}
        placeholder={"Ingresa el valor correcto"}
      />
      <Button onClick={handleButtonClick}>Verificar</Button>
    </>
  );
};

export { RandomCP };
