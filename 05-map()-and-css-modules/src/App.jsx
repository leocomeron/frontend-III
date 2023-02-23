import "./App.css";
import Button from "./components/Button";
import Calculator from "./components/Calculator";
import Item from "./components/Item";
import Movie from "./components/Movie";

// const titles = ["Breaking Bad", "The Office", "Prison Break", "Friends"];

const titles = [
  {
    name: "Breaking Bad",
    descripcion: "Una descripción 1",
    isClickable: true,
  },
  { name: "The Office", descripcion: "Una descripción 2", isClickable: false },
  { name: "Prison Break", descripcion: "Una descripción 3", isClickable: true },
];

function App() {
  return (
    <div className="App">
      {titles.map((titulo) => (
        <Movie
          title={titulo.name}
          descripcion={titulo.descripcion}
          isClickable={titulo.isClickable}
          key={titulo.name}
        />
      ))}
    </div>
  );
}

export default App;
