import styled, { keyframes } from "styled-components";
import { colors } from "../../GlobalStyles/variables"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const succes = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    text-shadow: 0px 0px 10px ${colors.success};
  }
  100% {
    opacity: 0.5;
  }
`

const error = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    text-shadow: 2px 2px 10px ${colors.error};
  }
  100% {
    opacity: 0.5;
  }
`

export const Correct = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.light};
  transition: .4s;

  animation: ${succes} 1.5s ease-in-out 2 ;
`

export const Incorrect = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.light};
  transition: .4s;

  animation: ${error} 1s ease 2 ;
`
