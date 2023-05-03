import styled from "styled-components";
import { colors } from "../../GlobalStyles/variables";

export const Search = styled.input`
  width: 60%;
  max-width: 500px;
  padding: 10px;
  margin: 0 auto 20px auto;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 50px;

  &:focus {
    outline-color: ${colors.secondary};
    box-shadow: 0 0 20px ${colors.secondary};
  }
`