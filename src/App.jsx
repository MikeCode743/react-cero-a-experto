import { useState } from "react";
import { FirstApp } from "./components/FirstApp";
import { CounterApp } from "./components/CounterApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CounterApp value={10} />
    </div>
  );
}

export default App;
