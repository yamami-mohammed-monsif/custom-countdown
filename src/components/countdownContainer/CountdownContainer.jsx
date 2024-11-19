import { useEffect, useState } from "react";

import "./countdown-container.css";

function CountdownContainer({ title, date }) {
  const countdownValue = new Date(date).getTime();
  const now = new Date().getTime();
  // const difference = countdownValue - now;
  const [difference, setDifference] = useState(countdownValue - now);

  useEffect(() => {
    setTimeout(() => {
      setDifference(difference - 1000);
    }, 1000);
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
      <button className="reset-btn">Reset</button>
    </div>
  );
}

export default CountdownContainer;
