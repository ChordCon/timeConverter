import { useState } from "react";
import "./styles.css";

export default function SToHm() {
  const [secInput, setSecInput] = useState("");
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  const [restSec, setRestSec] = useState(0);
  const [restMin, setRestMin] = useState(0);

  const secToMins = secInput / 60;
  const secToHours = secInput / 60 / 60;

  const enterSecsInput = (e) => {
    setSecInput(e.target.value);
  };

  const run = () => {
    setHours(Math.floor(secToHours));
    setMins(Math.floor(secToMins));
    setRestSec(secInput % 60);
    setRestMin(Math.floor((secInput % 3600) / 60));
  };

  const change = () => {
    secInput < 0 ? alert("Time cannot be a negative value.") : run();
  };

  return (
    <div>
      <h2>Converts the seconds to hour and minute.</h2>
      <div>
        <input
          value={secInput}
          style={{ width: 100 }}
          type="number"
          onChange={(e) => {
            enterSecsInput(e);
          }}
          placeholder="0"
        ></input>{" "}
        <span style={{ marginLeft: 14 }}>Seconds</span>{" "}
      </div>
      <button
        style={{ margin: 10 }}
        onClick={() => {
          change();
        }}
      >
        Convert
      </button>

      <h3>
        Result : {hours} hours {restMin} minutes {restSec} seconds
      </h3>
      <h3>
        Result : {mins} minutes {restSec} seconds
      </h3>

      <button
        style={{ margin: 0 }}
        onClick={() => {
          setSecInput("");
          setMins(0);
          setHours(0);
          setRestSec(0);
          setRestMin(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
