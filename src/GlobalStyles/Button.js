import styled from "styled-components";
import { colors } from "./variables";

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.light};
  background-color: ${colors.primary};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 10px;
  transition: .4s;

  &:hover {
    background-color: ${colors.secondary};
    cursor: pointer;
  }
`
