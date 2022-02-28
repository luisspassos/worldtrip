import { Skeleton } from "@chakra-ui/react";

type ResumeSkeletonProps = {
  resume: string;
};

export function ResumeSkeleton({ resume }: ResumeSkeletonProps) {
  return <Skeleton w="100%" h="200" isLoaded={!!resume} d={resume && "none"} />;
}
