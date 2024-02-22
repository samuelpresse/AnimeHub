import {
  List,
  ListItem,
  Spinner,
  Heading,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useAnimeQueryStore from "../store";
import imageAction from "../assets/ImageGenre/ImageAction.webp";
import genre from "../data/genre";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useAnimeQueryStore((s) => s.animeQuery.genreId);
  const setSelectedGenreId = useAnimeQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genre?.data.map((genre) => (
          <ListItem key={genre.mal_id} paddingY="5px">
            <HStack>
              <Image
                boxSize="38px"
                borderRadius={8}
                objectFit="cover"
                src={`/ImageGenre/${genre.image}`}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  genre.mal_id === selectedGenreId ? "bold" : "normal"
                }
                onClick={() => setSelectedGenreId(genre.mal_id)}
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
