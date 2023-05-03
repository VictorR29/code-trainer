import React, { useState, useEffect, useRef } from "react";
import { TimerContainer,BtnContainer, CountContainer, TimerBtn, Counter } from "./styles";

const Timer = ({ running, setRunning }) => {
  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotaltime] = useState(0);
  const timerId = useRef(null);

  const handleStart = (seconds) => {
    setTotaltime(seconds);
    setSeconds(seconds);
  };

  useEffect(() => {
    if(seconds > 0) {
      setRunning(true)
      timerId.current = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      setRunning(false);
      clearInterval(timerId.current)
      timerId.current = null;
    }

    return () => {
      clearInterval(timerId.current);
    }
  }, [seconds, running, setRunning])

  return (
    <TimerContainer>
      <BtnContainer>
        <TimerBtn onClick={() => handleStart(10)}>10 segundos</TimerBtn>
        <TimerBtn onClick={() => handleStart(30)}>30 segundos</TimerBtn>
        <TimerBtn onClick={() => handleStart(60)}>1 minuto</TimerBtn>
      </BtnContainer>
      <CountContainer>
        <Counter seconds={seconds} totalTime={totalTime}>
          Tiempo restante: {seconds} segundos
        </Counter>
      </CountContainer>
    </TimerContainer>
  );
};

export { Timer };