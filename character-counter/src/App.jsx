import { useState } from "react";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <Header />
      <TextArea text={text} setText={setText} />
      <CounterDisplay text={text} />
    </div>
  );
}

export default App;
