import "./countdown-container.css";

function CountdownContainer() {
  return (
    <div className="countdown-container">
      <h1>countdown title here</h1>
      <ul>
        <li>
          <span>2</span>
          Days
        </li>
        <li>
          <span>9</span>
          Hours
        </li>
        <li>
          <span>34</span>
          Minutes
        </li>
        <li>
          <span>55</span>
          Seconds
        </li>
      </ul>
      <button className="reset-btn">Reset</button>
    </div>
  );
}

export default CountdownContainer;
