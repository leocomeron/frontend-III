import "./App.css";
import FunctionButton from "./components/Button";
import Item from "./components/Item";
import Text from "./components/Text";

function App() {
  const text = "cool";

  return (
    <div className="App">
      <div>
        <Text
          title="Un titulo"
          subTitle="Subtitulo"
          description="Una descripción"
        />
        <Text
          title="Otro titulo"
          subTitle="Otro subtitulo"
          description="Otra descripción!!!"
        />
        <hr />
        <Text title="title"></Text>
        <Text
          title="Otro titulo"
          subTitle="Otro subtitulo"
          description="Otra descripción!!!"
        />
        <hr />
      </div>
    </div>
  );
}

export default App;
