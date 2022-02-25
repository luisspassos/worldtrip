import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { SwiperItem } from "./SwiperItem";

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
        <SwiperItem
          img="/images/continents/europe.jpg"
          continent="Europa"
          subtitle="O continente mais antigo."
        />
      </SwiperSlide>
    </Swiper>
  )
}