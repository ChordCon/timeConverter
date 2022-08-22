import { useState } from "react";
import "./styles.css";

export default function HMToS() {
  const [hoursInput, setHoursInput] = useState("");
  const [minInput, setMinInput] = useState("");
  const [second, setSeconds] = useState(0);
  const [min, setmins] = useState(0);

  const hoursToSec = hoursInput * 60 * 60;
  const minutesToSec = minInput * 60;
  const hoursToMin = hoursInput * 60;

  const enterHoursInput = (e) => {
    setHoursInput(e.target.value);
  };

  const enterMinInput = (e) => {
    setMinInput(e.target.value);
  };

  const run = () => {
    setSeconds(hoursToSec + minutesToSec);
    setmins(hoursToMin + Number(minInput));
  };

  const change = () => {
    hoursToSec < 0
      ? alert("Time cannot be a negative value.")
      : minutesToSec < 0
      ? alert("Time cannot be a negative value.")
      : run();
  };

  return (
    <div>
      <h2>Converts the hour and minute to seconds.</h2>
      <div>
        <input
          value={hoursInput}
          style={{ width: 100 }}
          type="number"
          onChange={(e) => {
            enterHoursInput(e);
          }}
          placeholder="0"
        ></input>{" "}
        <span style={{ marginLeft: 14 }}>Hours</span>{" "}
      </div>
      <div>
        <input
          value={minInput}
          style={{ width: 100 }}
          type="number"
          onChange={(e) => {
            enterMinInput(e);
          }}
          placeholder="0"
        ></input>
        <span style={{ marginLeft: 5 }}>Minutes</span>{" "}
      </div>
      <button
        style={{ margin: 10 }}
        onClick={() => {
          change();
        }}
      >
        Convert
      </button>

      <h3>Result : {min} minutes</h3>
      <h3>Result : {second} seconds</h3>

      <button
        style={{ margin: 0 }}
        onClick={() => {
          setMinInput("");
          setHoursInput("");
          setSeconds(0);
          setmins(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
