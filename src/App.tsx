import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
  // State variable to get the selected genre.
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
            selectedGenre={selectedGenre}
            handleSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
