import { useState } from "react";
import "./input-container.css";

function InputContainer({ setTitle, setDate, setView }) {
  const today = new Date().toISOString().split("T")[0];

  // get the title and the date the user submitted.
  function handleSubmit(e) {
    e.preventDefault();
    setTitle(e.target[0].value);
    setDate(e.target[1].value);

    setView("countdown");
  }

  return (
    <div className="input-container">
      <h1>Create a custom countdown</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" placeholder="what are counting down to?" />
        <label>Select a date</label>
        <input type="date" min={today} />

        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default InputContainer;
