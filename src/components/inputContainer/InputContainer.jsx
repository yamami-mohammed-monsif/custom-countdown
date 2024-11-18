import "./input-container.css";

function InputContainer() {
  return (
    <div className="input-container">
      <h1>Create a custom countdown</h1>
      <form action="">
        <label>Title</label>
        <input type="text" placeholder="what are counting down to?" />
        <label>Select a date</label>
        <input type="date" />

        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default InputContainer;
