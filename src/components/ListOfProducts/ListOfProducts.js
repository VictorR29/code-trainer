import React from "react";
import LazyLoad from "react-lazy-load";
import { useProducts } from "../../hooks/useProducts";
import { useSearch } from "../../hooks/useSearch";
import { SearchBar } from "../SearchBar/SearchBar";
import { Title, List, ItemList, ItemCode, ItemProduct} from "./styles";
import { LoadingText, LoadingWrapper, Loader  } from "../../GlobalStyles/AnimationLoader"

const ListOfProducts = () => {
  const { products, loading } = useProducts();
  const { searchValue, valueChange, result } = useSearch(products, ["code", "product"]);

  return (
    <>
      <Title>Lista de Códigos</Title>
      <SearchBar 
        value={searchValue}
        onChange={valueChange}
        placeholder="Buscar por código o producto" 
      />
      {loading 
        ? <LoadingWrapper>
            <Loader />
            <LoadingText>Cargando Lista...</LoadingText>
          </LoadingWrapper>
        : <List>
            {
              result.map(item => (
                  <LazyLoad height={120} width={284} threshold={0.5} key={item.code}>
                    <ItemList>
                      <ItemCode>{item.code}</ItemCode>
                      <ItemProduct>{item.product}</ItemProduct>
                    </ItemList>
                  </LazyLoad>
              ))
            }
          </List>
      }
    </>
  );
};

export { ListOfProducts }