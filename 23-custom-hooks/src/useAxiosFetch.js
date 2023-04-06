import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosfetch = (url) => {
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

  return { response, error, loading };
};

export default useAxiosfetch;
