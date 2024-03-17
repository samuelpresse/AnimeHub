import { Heading } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import genresData from "../data/genre";

interface Genre {
  mal_id: number;
  name: string;
}

const AnimeHeading = () => {
  const genreId = useAnimeQueryStore((state) => state.animeQuery.genreId);

  const genreName =
    genresData.data.find((genre: Genre) => genre.mal_id === genreId)?.name ||
    "Top";

  const heading = `${genreName} Anime`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default AnimeHeading;
