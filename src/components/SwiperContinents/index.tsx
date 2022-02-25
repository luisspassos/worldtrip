import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Center, Heading } from "@chakra-ui/react";

export function SwiperContinents() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiperContinents"
    >
      <SwiperSlide>
        <Center
          flexDirection="column"
          gap="4"
          h="100%"
          bgImage="url('/images/continents/europe.jpg')"
        >
          <Heading
            size="2xl"
          >
            Europa
          </Heading>
          <Heading as="h3">
            O continente mais antigo.
          </Heading>
        </Center>
      </SwiperSlide>
    </Swiper>
  )
}