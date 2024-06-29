// import Test from "./test.jsx";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter >= 20) {
      counter = 20;
    } else {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter <= 0) {
      counter == 0;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add</button>
      <button onClick={subValue}>Sub</button>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Css</h1>
    </>
  );
}

export default App;
