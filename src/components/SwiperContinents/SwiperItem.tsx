import { Center, Heading } from "@chakra-ui/react";

type SwiperItemProps = {
  img: string;
  continent: string;
  subtitle: string;
}

export function SwiperItem({ img, continent, subtitle }: SwiperItemProps) {
  return (
    <Center
      flexDirection="column"
      gap="4"
      h="100%"
      bgImage={`url(${img})`}
    >
      <Heading
        fontSize="3rem"
      >
        {continent}
      </Heading>
      <Heading 
        as="h3"
        color="gray.400"
        fontSize="1.7rem"
      >
        {subtitle}
      </Heading>
    </Center>
  )
}