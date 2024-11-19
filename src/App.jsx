import { useState } from "react";

import "./App.css";

import VideoBg from "./components/videoBg/VideoBg";
import InputContainer from "./components/inputContainer/InputContainer";
import CountdownContainer from "./components/countdownContainer/CountdownContainer";
import CompleteContainer from "./components/completeContainer/CompleteContainer";

function App() {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [currentView, setCurrentView] = useState("input");

  return (
    <div>
      <VideoBg />
      <div className="container">
        {currentView == "input" && (
          <InputContainer
            setTitle={setTitleInput}
            setDate={setDateInput}
            setView={setCurrentView}
          />
        )}
        {currentView == "countdown" && (
          <CountdownContainer
            title={titleInput}
            date={dateInput}
            setView={setCurrentView}
          />
        )}
        {currentView == "complete" && <CompleteContainer />}
      </div>
    </div>
  );
}

export default App;
