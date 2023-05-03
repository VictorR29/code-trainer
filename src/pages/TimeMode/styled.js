import styled from "styled-components";
import { Container } from "../Home/styles";

export const TimeContianer = styled(Container)`
  gap: 0;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`