import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Presentation() {
  return (
    <Flex 
      bgImage="url('/images/background_sky.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={{base: "12rem", lg: "21.25rem"}}
      px={{base: "1rem", sm: "3rem", lg: "8rem"}}
      align="center"
      justify="space-between"
      gap="2rem"
    >
      <Box>
        <Heading
          fontWeight={500}
          mb={{base: ".6rem", lg: "1.8rem"}}
          lineHeight={{
            base: "normal",
            lg: "3rem",
          }}
          color="gray.200"
          fontSize={{
            base: "1.4375rem",
            md: "1.6rem",
            lg: "2.25rem",
          }}
        >
          5 Continentes,<br />
          Infinitas possibilidades.
        </Heading>
        <Text
          color="gray.400"
          noOfLines={2}
          fontSize={{
            base: "0.875rem",
            lg: "lg"
          }}
        >
          Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
        </Text>
      </Box>
      <Image 
        src="/images/airplane.svg" 
        alt="Avião decolando" 
        mt="7rem"
        d={{
          base: 'none',
          lg: 'block'
        }}
      />
    </Flex>
  )
}