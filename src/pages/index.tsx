import { Box, Divider, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Benefits } from '../components/Benefits'

import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
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
