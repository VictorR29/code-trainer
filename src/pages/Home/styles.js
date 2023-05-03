import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { colors } from "../../GlobalStyles/variables";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    width: 60%;
  }
`

export const Link = styled(LinkRouter)`
  display: inline-block;
  width: 60%;
  max-width: 290px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  color: ${colors.buttonColor};
  border-radius: 50px;
  background-color: ${colors.buttonBg};
  box-shadow: 0 4px 10px rgba(0, 0, 0, .8);
  transition: .4s;

  &:hover {
    color: ${colors.text};
    background-color: ${colors.secondary};
  }

  @media (min-width: 768px) {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
  }
`
