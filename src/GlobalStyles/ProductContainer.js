import styled from "styled-components";
import { ItemList, ItemProduct } from "../components/ListOfProducts/styles";

export const ProductContainer = styled(ItemList)`
  justify-content: center;
  height: 70px;
  margin-bottom: 20px;
  padding: 0;
`

export const Product = styled(ItemProduct)`
  letter-spacing: 1px;
  width: 80%;
  padding: 10px;
`