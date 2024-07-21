import { useEffect, useState } from "react"

export const useFetchData = (url: string, delay: number) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData();
  }, [url, delay]);


  const fetchData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, delay));

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();

      setData(json.books);
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };

}