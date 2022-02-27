import { Flex, Heading, Image, Stack, Text, WrapItem } from "@chakra-ui/react";

type CardProps = {
  cityImg: string;
  country: string;
  city: string;
  flagImg: string;
}

export function Card({ country, city, cityImg, flagImg }: CardProps) {
  return (
    <WrapItem
      flexDirection="column"
      flexShrink={0}
      bg="white"
      w="16rem"
      borderRadius=".35rem"
    >
      <Image src={cityImg} alt={city} />
      <Flex 
        w="100%"
        borderRadius="0 0 .35rem .35rem"
        borderColor="yellow.100"
        borderStyle="solid"
        borderRightWidth="1px"
        borderLeftWidth="1px"
        borderBottomWidth="1px"
        padding="1.3rem"
        justify="space-between"
        fontFamily="barlow, sans-serif"
      >
        <Stack spacing="0.8rem">
          <Heading 
            as="h3"
            fontWeight="600"
            fontSize="1.2rem"
          >
            {city}
          </Heading>
          <Text 
            fontSize=".9rem"
            as="small"
            color="gray.500"
          >
            {country}
          </Text>
        </Stack>
        <Image src={flagImg} alt={country} />
      </Flex>
    </WrapItem>
  )
}