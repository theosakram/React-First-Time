import { useState, useEffect } from "react";

function useFetch(url, value = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const result = await (await fetch(url)).json();
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [value]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
