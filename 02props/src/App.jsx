import "./App.css";
import { CardOne } from "./components/CardOne";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">
        Tailwind css
      </h1>
      <CardOne username="Jane" btnText="Click Me" />
      <CardOne username="Merry" />
    </>
  );
}

export default App;
