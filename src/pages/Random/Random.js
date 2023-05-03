import React from "react";
import { BackButton } from "../../GlobalStyles/BackButton";
import { RandomCP } from "../../components/RandomCP/RandomCP";
import { RdmContianer } from "./styles";

const Random = () => {
  return (
    <RdmContianer>
      <BackButton to="/">⏴</BackButton>
      <RandomCP />
    </RdmContianer>
  )
}

export { Random };