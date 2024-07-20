import { useState, useEffect } from 'react';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export function useChunk<T>(array: T[], size: number): T[][] {
  const [chunkedArray, setChunkedArray] = useState<T[][]>([]);

  useEffect(() => {
    const result = chunk(array, size);
    setChunkedArray(result);
  }, [array, size]);

  return chunkedArray;
}