import {
  AspectRatio,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import AnimeAttributes from "../components/AnimeAttributes";
import useAnime from "../hooks/useAnime";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data: anime, isLoading, error } = useAnime(id!);
  console.log(anime);
  if (isLoading) return <Spinner />;

  if (error || !anime) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{anime.data.title}</Heading>
        <ExpandableText>{anime.data.synopsis}</ExpandableText>
        <AnimeAttributes anime={anime.data} />
      </GridItem>
      <GridItem>
        {anime.data.trailer.embed_url ? (
          <AspectRatio ratio={16 / 9}>
            <iframe
              title={anime.data.title}
              src={anime.data.trailer.embed_url}
              allowFullScreen
            />
          </AspectRatio>
        ) : (
          <Image
            src={anime.data.images.webp.large_image_url}
            alt="Alternative Text"
            objectFit="cover"
          />
        )}
      </GridItem>
    </SimpleGrid>
  );
};

export default AnimeDetailPage;
