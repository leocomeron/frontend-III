import "./App.css";

import FunctionButton from "./components/Button";
import Calculator from "./components/Calculator";
import Item from "./components/Item";
import Text from "./components/Text";

const titles = ["Breaking Bad", "The Office", "Prison Break", "Friends"];

// const colors = [
//   { name: "red", isPrimary: true },
//   { name: "blue", isPrimary: true },
//   { name: "black", isPrimary: false },
//   { name: "white", isPrimary: false },
// ];

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
