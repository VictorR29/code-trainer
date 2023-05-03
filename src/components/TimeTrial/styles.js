import styled from "styled-components";
import { colors } from "../../GlobalStyles/variables";

export const TimeOut = styled.span`
  margin-bottom: 50px;
  color: ${colors.light};
  transition: all .4s ease;
`

export const Points = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin: 20px 0 20px 0;
  border: solid 2px ${colors.light};
  border-radius: 20px;
`

export const Hits = styled.p`
  font-weight: bold;
  letter-spacing: 2px;
  color: ${colors.success};
`

export const Mistakes = styled.p`
  font-weight: bold;
  letter-spacing: 2px;
  color: ${colors.error};
`
