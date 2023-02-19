//Buscando el container root de HTML
const root = document.getElementById("root");

//Creando nuevo componente sin JSX
function App() {
  return React.createElement("div", null, "Hello World!");
}

//// Utilizando JSX para crear componentes
function ComponenteJSX() {
  return (
    <div>
      Hello World!
      <h1>Bienvenido a Front end 3!</h1>
    </div>
  );
}

const main = React.createElement(App);

//Retirar comentario para ver componente JSX
//const main = React.createElement(ComponenteJSX);

ReactDOM.render(main, root);
