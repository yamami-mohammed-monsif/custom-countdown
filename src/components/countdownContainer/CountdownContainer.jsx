import { useEffect, useState } from "react";

import "./countdown-container.css";

function CountdownContainer({ title, date, setView }) {
  const countdownValue = new Date(date).getTime();
  const now = new Date().getTime();
  const [difference, setDifference] = useState(countdownValue - now);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setDifference((prevDeffirence) => prevDeffirence - 1000);
    }, 1000);

    // clean up the inetervall when the coundown ends or when the component unmounts
    return () => clearInterval(myInterval);
  }, []);

  // hide the countdown and show the input
  function handleReset() {
    setView("input");
    // remove the saved countdown from local storage
    localStorage.removeItem("countdown");
  }

  // update view when countdown reaches 0
  useEffect(() => {
    if (difference < 0) {
      setView("complete");
    }
  }, [difference]);

  return (
    <div className="countdown-container">
      <h1>{title}</h1>
      <ul>
        <li>
          <span>{Math.floor(difference / (1000 * 60 * 60 * 24))}</span>
          Days
        </li>
        <li>
          <span>{Math.floor(difference / (1000 * 60 * 60)) % 24}</span>
          Hours
        </li>
        <li>
          <span>{Math.floor(difference / (1000 * 60)) % 60}</span>
          Minutes
        </li>
        <li>
          <span>{Math.floor(difference / 1000) % 60}</span>
          Seconds
        </li>
      </ul>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default CountdownContainer;
