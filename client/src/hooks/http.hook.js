import { useState, useCallback } from 'react';

export const useHttp = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}, mode) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
        }
        const response = await fetch(url, { method, body, headers, mode }); // make request to server with custom params
        const data = await response.json(); // get data from response and transform it into a json format

        // check if we have some errors with response
        if (!response.ok) {
          throw new Error(data.message || "request error"); // throwing error message we get from server, or show "request error"
        }

        setLoading(false);
        
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    }, []
  );
  
  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};