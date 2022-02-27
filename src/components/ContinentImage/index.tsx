import { Flex, Heading } from "@chakra-ui/react";

export function ContinentImage() {
  return (
    <Flex
      bgImage="url('/images/continents/europe.jpg')"
      bgSize="cover"
      bgColor="gray.500"
      bgPosition="center"
      height={{
        base: "15.125rem",
        md: "23.125rem",
        lg: "28.125rem"
      }}
      align={{
        base: "center",
        md: "end"
      }}
      justify={{
        base: "center",
        md: "start"
      }}
    >
      <Heading 
        as="h1"
        color="gray.200"
        fontWeight={600}
        mx={{
          base: 0,
          md:"9rem"
        }}
        my={{
          base: 0,
          md: "5rem"
        }}
        fontSize="2.8rem"
      >
        Europa
      </Heading>
    </Flex>
  )
}