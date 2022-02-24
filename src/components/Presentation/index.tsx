import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Presentation() {
  return (
    <Flex 
      bgImage="url('/images/background_sky.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="340px"
      px="8rem"
      align="center"
      justify="space-between"
    >
      <Box>
        <Heading fontWeight={500} mb="1.8rem" lineHeight="3rem">
          5 Continentes,<br />
          Infinitas possibilidades.
        </Heading>
        <Text
          color="gray.400"
          noOfLines={2}
          fontSize="lg"
        >
          Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
        </Text>
      </Box>
      <Image src="/images/airplane.svg" alt="Avião decolando" mt="7rem"/>
    </Flex>
  )
}