import { Grid, GridItem, Show } from '@chakra-ui/react';

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
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      {/* 
        To make shure that our 'aside' panel is only rendered on large devices we should wrap the GridItem inside 
        a 'Show' component.

        Show is really helpful it has properties like 'above' or 'below', and what we put inside will be rendered on 
        large screens and above.
      */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
