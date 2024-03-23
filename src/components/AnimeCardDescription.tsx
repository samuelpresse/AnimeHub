import { Text } from "@chakra-ui/react";
import { Anime } from "../entities/Anime";

interface Props {
  anime: Anime;
}

const AnimeCardDescription = ({ anime }: Props) => {
  function capitalizeFirstLetter(string: string | null): string {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Text>
      {`${anime.type}`}
      {anime.season !== null &&
        ` • ${capitalizeFirstLetter(anime.season)} ${anime.year}`}
    </Text>
  );
};

export default AnimeCardDescription;
