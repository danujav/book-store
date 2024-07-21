import { useEffect, useState } from "react"
import { ZodSchema } from "zod";

export const useFetchData = <T>(url: string, delay: number, schema: ZodSchema<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData();
  }, [url, delay, schema]);


  const fetchData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, delay));

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();

      const validatedData = schema.parse(json.books);
      setData(validatedData);

    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };

}