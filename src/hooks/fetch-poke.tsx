import { useState, useEffect } from 'react';

export const useFetchPoke = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // aggiungi stato loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);  
      }
    };

    fetchData();

    return () => {
      // Annulla la sottoscrizione all'evento API quando il componente viene smontato
    };
  }, [url]);

  return { data, error, loading };
};
