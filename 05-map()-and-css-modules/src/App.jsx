import "./App.css";
import FunctionButton from "./components/Button";
import Item from "./components/Item";

const colors = ["red", "blue", "black", "white"];

// const colors = [
//   { name: "red", isPrimary: true },
//   { name: "blue", isPrimary: true },
//   { name: "black", isPrimary: false },
//   { name: "white", isPrimary: false },
// ];

function App() {
  return (
    <div className="App">
      <>
        <h1>My colors</h1>
        <ul>
          {colors.map((color) => (
            <Item name={color}>
              <FunctionButton />
            </Item>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
