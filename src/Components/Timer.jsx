import React from "react";
import { BsStopwatch } from "react-icons/bs";
import styled from "styled-components";

const TimerWrapper = styled.div`
  margin-top: 7vh;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: #4f5c78;
  color: #000000bf;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.4);
  padding: 1rem 0;

  .stop-watch {
    font-size: 6.5rem;
    margin-right: 0.7rem;
    margin-top: 1.1rem;
  }

  label {
    margin-bottom: 0.2rem;
    margin-right: 0.8rem;
  }
  input {
    width: 100px;
    margin-right: 1rem;
    color: #282c34;
    outline: none;
    border: none;
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0 0.5rem;
    border-radius: 5px;
  }
  input:hover {
    background-color: #928f8f;
  }
`;

const Timer = ({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) => {
  return (
    <TimerWrapper>
      <BsStopwatch className="stop-watch" />
      <div className="d-flex flex-column">
        <label>hh</label>
        <input value={hours} onChange={changeHours} />
      </div>
      <div className="d-flex flex-column">
        <label>mm</label>
        <input value={minutes} onChange={changeMinutes} />
      </div>
      <div className="d-flex flex-column">
        <label>ss</label>
        <input value={seconds} onChange={changeSeconds} />
      </div>
      <div className="d-flex flex-column">
        <label>ms</label>
        <input value={milliseconds} />
      </div>
    </TimerWrapper>
  );
};

export default Timer;
