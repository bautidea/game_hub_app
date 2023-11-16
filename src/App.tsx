import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
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
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
