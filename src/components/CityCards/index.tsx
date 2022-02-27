import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export function CityCards() {
  return (
    <Box
      mx={{
        base: "2rem",
        md: "5rem",
        lg: "8rem"
      }}
    >
      <Heading
        fontWeight={500}
        fontSize={{
          base: "2rem",
          md: "2.1rem",
          lg: "2.3rem"
        }}
        mb="2rem"
      >
        Cidades +100
      </Heading>
      <SimpleGrid 
        minChildWidth="256px" 
        spacingX="2rem"
        spacingY={{
          base: "1.2rem",
          lg: "2rem" 
        }} 
        placeItems="center" 
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
      </SimpleGrid>         
    </Box>
  )
}