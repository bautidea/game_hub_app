import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

// Creating a custom hook to make HTTP request for getting the games and Genres.
// Check responses on -->https://api.rawg.io/docs/#operation/games_list

// Interface that represents the object we are obtaining when executing the .get() method.
interface FetchResponse<T> {
  count: number;
  results: T[];
}
// Giving a second optional parameter to filter.
// And the third parameter is an array of dependencies, if any of these dependencies
// changes, our effect will re run a refresh the data form the server, to get the
// selected genres.
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);

      apiClient
        // We are making this flexible by giving an axios request config object, in this object
        // we can pass data in the request body, we can set query string parameters, etc.
        // Spreading the requestConfig object in order to add any additional properties.
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
