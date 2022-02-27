import { Box, Flex, Heading } from "@chakra-ui/react";
import { Card } from "./Card";

export function CityCards() {
  return (
    <Box
      mx="8rem"
    >
      <Heading
        fontWeight={500}
        fontSize="2.3rem"
        mb="2rem"
      >
        Cidades +100
      </Heading>
      <Flex
        wrap="wrap"
        justify="space-between"
        rowGap="3rem"
      >
        <Card
          cityImg="/images/countries/london.jpg"
          country="Reino Unido"
          city="Londres"
          flagImg="/images/countries/uk_icon.svg"
        />
        <Card
          cityImg="/images/countries/paris.jpg"
          country="França"
          city="Paris"
          flagImg="/images/countries/france_icon.svg"
        />
        <Card
          cityImg="/images/countries/rome.jpg"
          country="Itália"
          city="Roma"
          flagImg="/images/countries/italy_icon.svg"
        />
        <Card
          cityImg="/images/countries/praga.jpg"
          country="República Tcheca"
          city="Praga"
          flagImg="/images/countries/czech_republic_icon.svg"
        />
        <Card
          cityImg="/images/countries/amsterdam.jpg"
          country="Holanda"
          city="Amsterdã"
          flagImg="/images/countries/netherlands_icon.svg"
        />
        
      </Flex>
    </Box>
  )
}