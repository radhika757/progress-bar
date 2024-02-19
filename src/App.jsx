import { useState } from "react";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  function restartProgressBar () {
    setValue(0);
  }
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="app">
        <span>Progress Bar</span>
        <ProgressBar value={value} />
        <button onClick={restartProgressBar}>Restart</button>
      </div>
    </>
  );
}

export default App;
