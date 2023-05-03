import styled, { keyframes } from "styled-components";
import { colors } from "./variables";

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`

export const LoadingText = styled.span`
  display: inline-block;
  margin-left: 10px;
  color: ${colors.light};
`

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid ${colors.secondary};
  border-top-color: transparent;
  animation: ${spin} 1.5s linear infinite;
`