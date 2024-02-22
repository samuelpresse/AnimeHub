import { HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { Genre } from "../entities/Anime";

interface Props {
  genres: Genre[];
}

const PlatformIconList = ({ genres = [] }: Props) => {
  return (
    <UnorderedList>
      <HStack marginY={1}>
        {genres.map((genre) => (
          <ListItem key={genre.mal_id} marginX={2}>{genre.name}</ListItem>
        ))}
      </HStack>
    </UnorderedList>
  );
};

export default PlatformIconList;
