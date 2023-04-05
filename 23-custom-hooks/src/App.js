import useAxiosFetch from "./useAxiosFetch";

export default function App() {
  const { error, loading, response } = useAxiosFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="App">
      {loading ? <h2>Cargando...</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {response?.length ? (
        <ul>
          {response.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
