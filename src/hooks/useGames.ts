import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

// Creating a custom hook to make HTTP request for getting the games.

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

// As second parameter we are passing the selected genre as a query string parameter,
// 'params' is a property of Axios RequestConfigObject.
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
