import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Benefit } from '../components/Benefit'
import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
import { SwiperContinents } from '../components/SwiperContinents'

const Home: NextPage = () => {

  return (
    <Box
      paddingBottom="2rem"
    >
      <Header />
      <Presentation />
      <Flex
        justify="space-between"
        px="8rem"
        mt="6rem"
      >
        <Benefit 
          text="vida noturna"
          iconAlt="Vida noturna"
          icon="/images/cocktail_icon.svg"
        />

        <Benefit 
          text="praia"
          iconAlt="Praia"
          icon="/images/surf_icon.svg"
        />

        <Benefit 
          text="moderno"
          iconAlt="Edifício"
          icon="/images/building_icon.svg"
        />

        <Benefit 
          text="clássico"
          iconAlt="Ponto turístico"
          icon="/images/tourist_spot_icon.svg"
        />

        <Benefit 
          text="e mais..."
          iconAlt="Mundo"
          icon="/images/earth_icon.svg"
        />
      </Flex>

      <Divider 
        border={0}
        bg="gray.700"
        h="3px"
        w="4rem"
        mx="auto"
        my="4rem"
      />
      
      <Heading 
        as="h1"
        color="gray.700"
        textAlign="center"
        fontWeight={500}
        fontSize="2rem"
        mb="2.8rem"
        lineHeight="2.8rem"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <SwiperContinents />
    </Box>
  )
}

export default Home
