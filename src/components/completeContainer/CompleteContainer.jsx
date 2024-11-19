import "./complete-container.css";

function CompleteContainer({ completeDate, setView }) {
  const formattedDate = new Date(completeDate).toLocaleString();

  // hide complete and show input
  function handleClick() {
    setView("input");
    localStorage.removeItem("countdown");
  }

  return (
    <div className="complete-container">
      <h1 className="complete-title">countdown complete</h1>
      <h1>
        countdown finished on
        <br /> {formattedDate}
      </h1>
      <button className="new-countdown" onClick={handleClick}>
        New countdown
      </button>
    </div>
  );
}

export default CompleteContainer;
