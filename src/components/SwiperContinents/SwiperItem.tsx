import { Center, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

type SwiperItemProps = {
  img: string;
  continent: string;
  subtitle: string;
};

export function SwiperItem({ img, continent, subtitle }: SwiperItemProps) {
  return (
    <NextLink href="/continente" passHref>
      <Center
        flexDirection="column"
        gap={{
          base: "2",
          md: "3",
          lg: "4",
        }}
        h="100%"
        bgImage={`url(${img})`}
        bgSize="cover"
        bgPosition="center"
        bgColor="gray.500"
        transition="transform 0.2s"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.1)",
          backfaceVisibility: "hidden",
        }}
        px="6rem"
      >
        <Heading
          textAlign="center"
          fontSize={{
            base: "2.5rem",
            md: "2.7rem",
            lg: "3rem",
          }}
          textShadow="2px 2px 4px #000000bc"
          color="gray.200"
        >
          {continent}
        </Heading>
        <Heading
          textAlign="center"
          as="h3"
          color="gray.400"
          fontSize={{
            base: "1.3rem",
            md: "1.5rem",
            lg: "1.7rem",
          }}
          textShadow="2px 2px 4px #000"
        >
          {subtitle}
        </Heading>
      </Center>
    </NextLink>
  );
}
