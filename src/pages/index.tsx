import { Divider, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules


import { Benefit } from '../components/Benefit'
import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

const Home: NextPage = () => {
  return (
    <>
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
        mb="3rem"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </>
  )
}

export default Home
