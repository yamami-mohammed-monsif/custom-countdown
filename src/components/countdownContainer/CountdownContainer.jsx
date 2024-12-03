import { useEffect, useState } from "react";

import "./countdown-container.css";
import Countdown from "./Countdown";

function CountdownContainer({ title, date, setView }) {
  const countdownValue = new Date(date).getTime();
  const now = new Date().getTime();

  // hide the countdown and show the input
  function handleReset() {
    setView("input");
    // remove the saved countdown from local storage
    localStorage.removeItem("countdown");
  }

  return (
    <div className="countdown-container">
      <h1>{title}</h1>

      <Countdown countdownValue={countdownValue} now={now} setView={setView} />

      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default CountdownContainer;
