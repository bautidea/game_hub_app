import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

// We should pack related variables inside an object, here we are using a
// Query Object Patter, its a query object that contains all the information
// we need to query the games.
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // We initialize it to an empty object, not '(null)' because we will always have
  // the query object, but the properties might be null.
  // We are initializing as GameQuery because if not the TS compiler wont let us assign
  // an empty object to GameQuery object.
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    // Defining layout of grid with templateAreas --> https://chakra-ui.com/docs/styled-system/responsive-styles
    // Here we are making the layout responsive by indicating how it should look for each break point in
    // chakra ui.
    <Grid
      templateAreas={{
        base: `"nav" "main"`,

        lg: `"nav  nav" 
            "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        {/* Adding our NavBar component */}
        <NavBar />
      </GridItem>

      {/* 
        To make shure that our 'aside' panel is only rendered on large devices we should wrap the GridItem inside 
        a 'Show' component.

        Show is really helpful it has properties like 'above' or 'below', and what we put inside will be rendered on 
        large screens and above.
      */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            handleSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            handleSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            handleSort={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
