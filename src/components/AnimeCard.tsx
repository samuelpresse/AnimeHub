import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Anime } from "../entities/Anime";
import AnimeScore from "./AnimeScore";
import AnimeGenreList from "./AnimeCardDescription";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Link to={"/anime/" + anime.mal_id} style={{ textDecoration: "none" }}>
      <Card>
        <Image src={anime.images.webp.large_image_url} alt={anime.title} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <AnimeGenreList anime={anime} />
            <AnimeScore score={anime.score} />
          </HStack>
          <Heading fontSize="2xl" color="currentcolor">
            {anime.title}
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default AnimeCard;
