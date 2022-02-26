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
      bgSize="cover"
      bgPosition="center"
    >
      <Heading
        fontSize="3rem"
        textShadow="dark-lg"
      >
        {continent}
      </Heading>
      <Heading 
        as="h3"
        color="gray.400"
        fontSize="1.7rem"
        textShadow="1px 2px 2px #09"
      >
        {subtitle}
      </Heading>
    </Center>
  )
}