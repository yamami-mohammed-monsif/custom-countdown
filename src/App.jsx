import { useEffect, useState } from "react";

import "./App.css";

import VideoBg from "./components/videoBg/VideoBg";
import InputContainer from "./components/inputContainer/InputContainer";
import CountdownContainer from "./components/countdownContainer/CountdownContainer";
import CompleteContainer from "./components/completeContainer/CompleteContainer";

function App() {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [currentView, setCurrentView] = useState("input");

  // when the app first loaded, retreive the stored countdown if there is one
  useEffect(() => {
    try {
      const storedCountdown = localStorage.getItem("countdown");
      if (storedCountdown) {
        const { title, date } = JSON.parse(storedCountdown);
        setTitleInput(title);
        setDateInput(date);
        setCurrentView("countdown");
      }
    } catch (error) {
      console.error("Failed to load countdown from local storage", error);
    }
  }, []);

  return (
    <div>
      <VideoBg />
      <div className="container">
        {currentView === "input" && (
          <InputContainer
            setTitle={setTitleInput}
            setDate={setDateInput}
            setView={setCurrentView}
          />
        )}
        {currentView === "countdown" && (
          <CountdownContainer
            title={titleInput}
            date={dateInput}
            setView={setCurrentView}
          />
        )}
        {currentView === "complete" && (
          <CompleteContainer
            completeDate={dateInput}
            setView={setCurrentView}
          />
        )}
      </div>
    </div>
  );
}

export default App;
