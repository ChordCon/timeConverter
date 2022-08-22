import { useState } from "react";
import HMToS from "./HMToS";
import SToHm from "./SToHM";
import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState(true);

  const click1 = () => {
    setDisplay(true);
  };
  const click2 = () => {
    setDisplay(false);
  };

  return (
    <div className="App">
      <button
        style={{ margin: 5 }}
        onClick={() => {
          click1();
        }}
      >
        Converts the hour and minute to seconds
      </button>
      <button
        style={{ margin: 5 }}
        onClick={() => {
          click2();
        }}
      >
        Converts the seconds to hour and minute
      </button>
      {display === true ? <HMToS /> : <SToHm />}
    </div>
  );
}
