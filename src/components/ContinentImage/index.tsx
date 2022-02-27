import { Flex, Heading } from "@chakra-ui/react";

export function ContinentImage() {
  return (
    <Flex
      bgImage="url('/images/continents/europe.jpg')"
      bgSize="cover"
      bgColor="gray.500"
      bgPosition="center"
      height="28.125rem"
      align="end"
    >
      <Heading 
        as="h1"
        color="gray.200"
        fontWeight={600}
        mx="9rem"
        my="5rem"
        fontSize="2.8rem"
      >
        Europa
      </Heading>
    </Flex>
  )
}