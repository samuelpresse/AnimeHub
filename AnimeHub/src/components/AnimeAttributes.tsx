import { SimpleGrid, Text } from "@chakra-ui/react";
import { Anime } from "../entities/Anime";
import AnimeScore from "./AnimeScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  anime: Anime;
}

const AnimeAttributes = ({ anime }: Props) => {
  console.log(anime);
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Statistics">
        <Text>
          <span style={{ fontWeight: "bold" }}>Score:</span>{" "}
          <AnimeScore score={anime.score} /> (scored by {anime.scored_by} users)
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Rank:</span> #{anime.rank}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Popularity:</span> #
          {anime.popularity}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Members:</span> {anime.members}
        </Text>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {anime.genres.map((genre) => (
          <Text key={genre.mal_id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Status">
        <Text>{anime.status}</Text>
      </DefinitionItem>
      <DefinitionItem term="Studio">
        {anime.studios?.map((studio) => (
          <Text key={studio.mal_id}>{studio.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default AnimeAttributes;
