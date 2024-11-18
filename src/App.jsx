import VideoBg from "./components/videoBg/VideoBg";
import InputContainer from "./components/inputContainer/InputContainer";
import CountdownContainer from "./components/countdownContainer/CountdownContainer";
import CompleteContainer from "./components/completeContainer/CompleteContainer";

import "./App.css";

function App() {
  return (
    <div>
      <VideoBg />
      <div className="container">
        <InputContainer />
        <CountdownContainer />
        <CompleteContainer />
      </div>
    </div>
  );
}

export default App;
