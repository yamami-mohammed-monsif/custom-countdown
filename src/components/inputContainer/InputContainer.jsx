import { useState } from "react";
import "./input-container.css";

function InputContainer({ setTitle, setDate, setView }) {
  const today = new Date().toISOString().split("T")[0];

  const [title, setLocalTitle] = useState("");
  const [date, setLocalDate] = useState("");

  // get the value of the title
  function handleTitleChange(e) {
    setLocalTitle(() => e.target.value);
  }

  // get the value of the date
  function handleDateChange(e) {
    setLocalDate(() => e.target.value);
  }

  // get the title and the date the user submitted.
  function handleSubmit(e) {
    e.preventDefault();
    setTitle(title);
    setDate(date);

    // check if there is no missing inputs and then show countdown
    if (title && date) {
      setView("countdown");
    }

    // save the title and the countdown in the local storge
    const savedCountdown = {
      title: title,
      date: date,
    };
    localStorage.setItem("countdown", JSON.stringify(savedCountdown));
  }

  return (
    <div className="input-container">
      <h1>Create a custom countdown</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="what are counting down to?"
          value={title}
          onChange={handleTitleChange}
        />
        <label>Select a date</label>
        <input
          type="date"
          min={today}
          value={date}
          onChange={handleDateChange}
        />

        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default InputContainer;
