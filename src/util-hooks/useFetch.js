import { useEffect, useState } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setData(null); 
      });
  }, [options.url]);

  return {
    data,
  };
};
