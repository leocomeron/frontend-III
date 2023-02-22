import "./App.css";
import FunctionButton from "./components/Button";
import ClassButton from "./components/Button";
import Item from "./components/Item";
import Text from "./components/Text";

function App() {
  const text = "cool";
  return (
    <div className="App">
      <div>
        <h1>My colors</h1>
        <ClassButton name={text} />
        <hr />
      </div>
    </div>
  );
}

export default App;
