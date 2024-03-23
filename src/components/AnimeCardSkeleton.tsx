import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const AnimeCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="500px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default AnimeCardSkeleton;
