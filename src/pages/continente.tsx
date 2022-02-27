import { Box } from "@chakra-ui/react";
import { CityCards } from "../components/CityCards";
import { ContinentImage } from "../components/ContinentImage";
import { ContinentInformation } from "../components/ContinentInformation";
import { Header } from "../components/Header";

export default function Continente() {
  return (
    <Box
      pb="2rem"
      maxW={1450}
      m="0 auto"
    >
      <Header />
      <ContinentImage />
      <ContinentInformation />
      <CityCards />
    </Box>
  )
}