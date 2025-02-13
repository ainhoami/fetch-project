import { useState, useEffect, useCallback } from "react";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const useApiHook = <T>(url: string, method: "get" | "post", config?: AxiosRequestConfig, body?: Record<string, string>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // Limpiar el error al intentar una nueva solicitud
    try {
      let response: AxiosResponse<T>;
      if (method === "post") {
        response = await axios.post(url, body, config);
      } else {
        response = await axios.get(url, config);
      }
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else {
        setError("Error getting the data");
      }
    } finally {
      setLoading(false);
    }
  }, [url, method, body, config]);

  // Este efecto solo se ejecutará cuando la URL o las dependencias de la solicitud cambien
  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, loading, error, fetchData };
};

export default useApiHook;
