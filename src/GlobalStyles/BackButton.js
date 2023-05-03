import styled from "styled-components";
import { Link } from "../pages/Home/styles";
import { colors } from "./variables";

export const BackButton = styled(Link)`
  position: fixed;
  top: 20px;
  left: 10px;
  width: 16%;
  max-width: 80px;
  height: 30px;
  line-height: 30px;
  color: ${colors.text};
  background-color: ${colors.light};

  &:hover {
    box-shadow: 0 0 13px rgb(236, 28, 36);
    background-color: ${colors.error};
  }

  @media (min-width: 768px) {
    left: 24px;
  }
`
