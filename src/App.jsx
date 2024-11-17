import VideoBg from "./components/videoBg/VideoBg";
import InputContainer from "./components/inputContainer/InputContainer";

import "./App.css";

function App() {
  return (
    <div>
      <VideoBg />
      <div className="container">
        <InputContainer />
      </div>
    </div>
  );
}

export default App;
