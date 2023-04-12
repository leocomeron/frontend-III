/* Importando um Hook personalizado */
import { statusList, useFetch } from "./UseFetch";

/* Importando Sweetalert2 */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Pokemon({ pokemon }) {
  const MySwal = withReactContent(Swal);

  /* uso el custom hook */
  const { data, status } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (status === statusList.LOADING) {
    return <p>Cargando...</p>;
  }
  if (status === statusList.SUCCESS) {
    /* Apresenta um alerta com as informações do Pokemon */
    MySwal.fire({
      title: `${data.name}`,
      imageUrl: `${data.sprites.front_default}`,
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: `${data.name}`,
    });
  }
  if (status === statusList.ERROR) {
    return <p>Error al buscar el pokemon: {pokemon}</p>;
  }

  return (
    <div>
      <h3>{data.name}</h3>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}

export default Pokemon;
