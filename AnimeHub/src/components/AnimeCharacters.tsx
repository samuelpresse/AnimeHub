import { useParams } from "react-router-dom";
import {
  Box,
  GridItem,
  IconButton,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useCharacters from "../hooks/useCharacters";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

function AnimeCharacters() {
  const { id } = useParams();
  const { data: characters, isLoading, error } = useCharacters(id!);

  const [showMainCharacters, setShowMainCharacters] = useState(false);
  const [showSideCharacters, setShowSideCharacters] = useState(false);

  const mainCharacters = characters?.data.filter(
    (character) => character.role === "Main"
  );
  const sideCharacters = characters?.data.filter(
    (character) => character.role !== "Main"
  );

  if (isLoading) return <Spinner />;

  if (error || !characters) throw error;

  return (
    <Box>
      <Box display="flex" alignItems="center" mt="4" mb="4">
        <Text
          fontSize="xl"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => setShowMainCharacters(!showMainCharacters)}
          mr="2"
        >
          Main Characters
        </Text>
        <IconButton
          aria-label="Toggle main characters"
          icon={showMainCharacters ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setShowMainCharacters(!showMainCharacters)}
        />
      </Box>
      {showMainCharacters && (
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          justifyItems="center"
          spacing={2}
        >
          {mainCharacters?.map((character) => (
            <GridItem key={character.character.mal_id}>
              <Image
                height="235px"
                width="200px"
                objectFit="cover"
                src={character.character.images.webp.image_url}
                alt={character.character.name}
              />
              <Text
                mt="2"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                maxWidth="200px"
              >
                {character.character.name}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      )}

      <Box display="flex" alignItems="center" mt="4" mb="4">
        <Text
          fontSize="xl"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => setShowSideCharacters(!showSideCharacters)}
          mr="2"
        >
          Side Characters
        </Text>
        <IconButton
          aria-label="Toggle side characters"
          icon={showSideCharacters ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setShowSideCharacters(!showSideCharacters)}
        />
      </Box>
      {showSideCharacters && (
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          justifyItems="center"
          spacing={2}
        >
          {sideCharacters?.map((character) => (
            <GridItem key={character.character.mal_id}>
              <Image
                height="235px"
                width="200px"
                objectFit="cover"
                src={character.character.images.webp.image_url}
                alt={character.character.name}
              />
              <Text
                mt="2"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                maxWidth="200px"
              >
                {character.character.name}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default AnimeCharacters;
