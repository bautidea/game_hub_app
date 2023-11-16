import useData from './useData';

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

const useGames = () => useData<Game>('/games');

export default useGames;
