import { Skeleton } from "@chakra-ui/react";

type CardSkeletonProps = {
  isLoaded: boolean;
};

export function CardSkeleton({ isLoaded }: CardSkeletonProps) {
  return <Skeleton d={isLoaded ? "none" : "block"} isLoaded={isLoaded} w={256} h={279} borderRadius=".35rem" />;
}
