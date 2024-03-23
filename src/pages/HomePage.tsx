import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import AnimeGrid from "../components/AnimeGrid";
import GenreList from "../components/GenreList";
import AnimeHeading from "../components/AnineHeading";
import FilterSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <AnimeHeading></AnimeHeading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <FilterSelector />
            </Box>
          </Flex>
        </Box>
        <AnimeGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
