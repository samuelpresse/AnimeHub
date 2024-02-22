import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const AnimeScore = ({ score }: Props) => {
  let color = score > 7 ? "green" : score > 6 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default AnimeScore;
