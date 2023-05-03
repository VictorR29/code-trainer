import React from "react";
import { BackButton } from "../../GlobalStyles/BackButton";
import { TimeTrial } from "../../components/TimeTrial/TimeTrial";
import { TimeContianer } from "./styled";

const TimeMode = () => {
  return (
    <TimeContianer>
      <BackButton to="/">⏴</BackButton>
      <TimeTrial />
    </TimeContianer>
  )
};

export { TimeMode };