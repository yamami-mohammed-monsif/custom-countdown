import VideoBg from "./components/videoBg/VideoBg";
import InputContainer from "./components/inputContainer/InputContainer";
import CountdownContainer from "./components/countdownContainer/CountdownContainer";

import "./App.css";

function App() {
  return (
    <div>
      <VideoBg />
      <div className="container">
        <InputContainer />
        <CountdownContainer />
      </div>
    </div>
  );
}

export default App;
