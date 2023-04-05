import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetch = async () => {
      setloading(true);
      try {
        const result = await axios.get(url);
        setResponse(result.data);
      } catch (error) {
        setError(error);
      }
      setloading(false);
    };

    fetch();
  }, [url]);

  return (
    <div className="App">
      {loading ? <h2>Cargando...</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {response?.length ? (
        <ul>
          {response.map((item) => (
            <li key={item.id}>{JSON.stringify(item.title)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
