/* 
    Custom Hook 
    para buscar en la API de pokemon
*/
import { useEffect, useState, useCallback } from "react";

import useAsyncError from "./Errors/useAsyncError";

/* Posibles status de la request a la API */
export const statusList = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

export const useFetch = (url) => {
  const [status, setStatus] = useState(statusList.LOADING);
  const [data, setData] = useState();
  const throwError = useAsyncError();

  const fetchData = useCallback(async () => {
    setStatus(statusList.LOADING);

    try {
      const response = await fetch(url);

      /* Igual a un status de response = 200 */
      if (!response.ok) {
        throw Error("Error al hacer la request a la API");
      }

      const json = await response.json();

      setData(json);
      setStatus(statusList.SUCCESS);
    } catch (error) {
      setStatus(statusList.ERROR);
      /* Usamos el hook personalizado para agarrar los errores*/
      throwError(new Error(error));
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, status };
};
