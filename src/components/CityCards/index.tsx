import { Box, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { Card } from "./Card";
import { CardSkeleton } from "./CardSkeleton";

type CityCardsProps = {
  mostVisitedCities: {
    img: string;
    city: string;
    country: string;
    countryFlag: string;
  }[];
};

export function CityCards({ mostVisitedCities }: CityCardsProps) {
  return (
    <Box
      mx={{
        base: "2rem",
        md: "5rem",
        lg: "8rem",
      }}
    >
      <Heading
        fontWeight={500}
        fontSize={{
          base: "2rem",
          md: "2.1rem",
          lg: "2.3rem",
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
          lg: "2rem",
        }}
        placeItems="center"
      >
        {mostVisitedCities && mostVisitedCities.map((city) => <Card key={city.country} cityImg={city.img} country={city.country} city={city.city} flagImg={city.countryFlag} />)}
        <CardSkeleton isLoaded={!!mostVisitedCities} />
        <CardSkeleton isLoaded={!!mostVisitedCities} />
        <CardSkeleton isLoaded={!!mostVisitedCities} />
      </SimpleGrid>
    </Box>
  );
}
