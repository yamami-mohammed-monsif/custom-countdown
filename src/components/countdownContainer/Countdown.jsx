import React, { useState, useEffect } from "react";

function Countdown({ countdownValue, now, setView }) {
  const [difference, setDifference] = useState(countdownValue - now);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setDifference((prevDeffirence) => prevDeffirence - 1000);
    }, 1000);

    // clean up the inetervall when the coundown ends or when the component unmounts
    return () => clearInterval(myInterval);
  }, []);

  // update view when countdown reaches 0
  useEffect(() => {
    if (difference < 0) {
      setView("complete");
    }
  }, [difference]);

  return (
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
  );
}

export default Countdown;
