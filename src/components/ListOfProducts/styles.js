import styled, { keyframes } from "styled-components";
import { colors } from "../../GlobalStyles/variables";

export const Title = styled.h1`
  margin-top: 40px;
  font-size: 24px;
  text-align: center;
  color: ${colors.light};
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin: 20px;
    justify-content: space-around;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
`

export const ItemList = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  max-width: 350px;
  min-width: 260px;
  height: 60px;
  padding: 12px;
  border: solid 4px #fff;
  border-radius: 50px;
  text-align: center;
  background-color: ${colors.primary};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-in;
`

export const ItemCode = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 8px;
  font-weight: 600;
  color: ${colors.text};
  border-radius: 50%;
  background-color: ${colors.secondary};
`

export const ItemProduct = styled.span`
  width: 68%;
  padding: 8px;
  font-weight: 600;
  letter-spacing: .6px;
  color: ${colors.buttonColor};
  border-radius: 20px;
  background-color: ${colors.tertiary};
`
