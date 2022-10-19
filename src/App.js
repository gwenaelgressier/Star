import { useState } from "react";
import "./App.css";
import { Rate } from "./components/Star";

function App() {
  const [note, setNote] = useState(4);

  const handleNote = (value) => {
    console.log(value);
    if (value === 1 && note < 5) {
      setNote(note + 1);
      return;
    }
    if (value === -1 && note > 0) {
      setNote(note - 1);
      return;
    }
  };
  console.log(note);

  return (
    <div className="App">
      <h1>Note</h1>
      <Rate
        className="stars"
        note={note}
        total={5}
        height="20px"
        full={undefined}
        empty={undefined}
      />
      <button onClick={() => handleNote(-1)}>-</button>
      <button onClick={() => handleNote(+1)}>+</button>
    </div>
  );
}

export default App;
