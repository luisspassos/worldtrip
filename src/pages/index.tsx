import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Benefits } from '../components/Benefits'

import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
import { SmallDivider } from '../components/SmallDivider'
import { SwiperContinents } from '../components/SwiperContinents'

const Home: NextPage = () => {

  return (
    <Box
      paddingBottom="2rem"
      maxW={1450}
      m="0 auto"
    >
      <Header />
      <Presentation />
      <Benefits />

      <SmallDivider />
      
      <Heading 
        as="h1"
        color="gray.700"
        textAlign="center"
        fontWeight={500}
        fontSize={{
          base: "1.7rem",
          lg: "2rem",
        }}
        mb={{
          base: "1rem",
          md: "2rem",
          lg: "2.8rem"
        }}
        lineHeight={{
          base: "2.5rem",
          lg: "2.8rem"
        }}
        mx="2rem"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <SwiperContinents />
    </Box>
  )
}

export default Home
