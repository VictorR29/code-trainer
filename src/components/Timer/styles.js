import styled from "styled-components";
import { colors } from "../../GlobalStyles/variables";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 500px;
  margin-bottom: 20px;
  height: 126px;
  border: solid 2px ${colors.light};
  border-radius: 16px;
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const TimerBtn = styled.button`
  padding: 6px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.secondary};
  transition: .4s;

  font-size: 16px;
  font-weight: bold;
  color: ${colors.text};

  &:hover{
    cursor: pointer;
    color: ${colors.buttonColor};
    background-color: ${colors.buttonBg};
    box-shadow: 0 0 13px rgb(236, 28, 36);
  }
`

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Counter = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (
    props.seconds > props.totalTime/2 ? colors.success : props.seconds > 10 ? colors.secondary : colors.error
  )};
  transition: color .4s ease;
`
