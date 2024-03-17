import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Anime } from "../entities/Anime";
import AnimeScore from "./AnimeScore";
import AnimeGenreList from "./AnimeCardDescription";

interface Props {
  anime: Anime;
}

const GameCard = ({ anime }: Props) => {
  return (
    <Card>
      <Image src={anime.images.webp.large_image_url} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <AnimeGenreList anime={anime} />
          <AnimeScore score={anime.score} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/anime/" + anime.mal_id}>{anime.title}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
