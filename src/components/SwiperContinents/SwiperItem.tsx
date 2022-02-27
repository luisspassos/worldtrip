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
      bgColor="gray.500"
    >
      <Heading
        fontSize="3rem"
        textShadow="2px 2px 4px #000000bc"
        color="gray.200"
      >
        {continent}
      </Heading>
      <Heading 
        as="h3"
        color="gray.400"
        fontSize="1.7rem"
        textShadow="2px 2px 4px #000"
      >
        {subtitle}
      </Heading>
    </Center>
  )
}