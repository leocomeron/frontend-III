import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>Ups! La pagina no se ha encontrado!</div>
      <button>
        <Link to="/">Volver a pagina principal</Link>
      </button>
    </>
  );
};

export default ErrorPage;
