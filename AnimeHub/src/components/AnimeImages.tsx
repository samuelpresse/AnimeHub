import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  images: string[];
}

const AnimeImages = ({ images }: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {images.map((image) => (
        <Image key={image} src={image} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeImages;
