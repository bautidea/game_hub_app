import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

// Interface that represents the fetched games, only grabbing the properties
// that are of use to the project.
interface Game {
  id: number;
  name: string;
}

// Interface that represents the object we are obtaining when executing the .get() method.
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  // We need a state variable for storing the games objects.
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  // Using fetch hook to send a fetch request to the backend.
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
