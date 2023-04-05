import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxiosFetch = (url) => {
  return { response, error, loading };
};

export default useAxiosFetch;
