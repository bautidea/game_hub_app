import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

// Creating a custom hook to make HTTP request.

// Check responses on -->https://api.rawg.io/docs/#operation/games_list

// Interface that represents our platform objects.
export interface Platform {
  id: number;
  slug: string;
  name: string;
}

// Interface that represents the fetched games, only grabbing the properties
// that are of use to the project.
export interface Game {
  id: number;
  name: string;
  background_image: string;
  // -> Here each element in the array is a object with name platform with a property '.platform',
  // that has the Platform interface, so its like this [ { platform : { id, name, slug } } ]
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// Interface that represents the object we are obtaining when executing the .get() method.
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  // We need a state variable for storing the games objects.
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  // Using fetch hook to send a fetch request to the backend.
  useEffect(() => {
    // controller to handle cancellations.
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
