import { useState, useEffect } from 'react';

export const useFetchPoke = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };
    
    fetchData();
    
    return () => {
      // Annulla la sottoscrizione all'evento API quando il componente viene smontato
    };
  }, [url]);
  
  return { data, error };
};
