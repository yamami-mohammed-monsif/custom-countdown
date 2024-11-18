import "./complete-container.css";

function CompleteContainer() {
  return (
    <div className="complete-container" hidden>
      <h1 className="complete-title">countdown complete</h1>
      <h1>
        countdown finished on
        <br /> 05-05-2020
      </h1>
      <button className="new-countdown">New countdown</button>
    </div>
  );
}

export default CompleteContainer;
