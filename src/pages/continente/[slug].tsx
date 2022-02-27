import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CityCards } from "../../components/CityCards";
import { ContinentImage } from "../../components/ContinentImage";
import { ContinentInformation } from "../../components/ContinentInformation";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type Continent = {
  img: string;
  continent: string;
  info: {
    resume: string;
    countries: number;
    languages: number;
    mostVisitedCities: number;
  }
  mostVisitedCities: {
    img: string;
    city: string;
    country: string;
    countryFlag: string;
  }[]
}

export default function Continente() {

  const [continent, setContinent] = useState({} as Continent);

  const { asPath } = useRouter()
  const [,,slug] = asPath.split('/')

  useEffect(() => {
    async function getContinent() {
      const { data } = await api.get(`/continents/${slug}`)
      setContinent(data)
    }

    getContinent()
  }, [slug])

  console.log(continent)

  return (
    <Box
      pb="2rem"
      maxW={1450}
      m="0 auto"
    >
      <Header />
      <ContinentImage
        continent={continent.continent}
        img={continent.img}
      />
      <ContinentInformation
        {...continent.info}
      />
      <CityCards
        mostVisitedCities={continent.mostVisitedCities}
      />
    </Box>
  )
}