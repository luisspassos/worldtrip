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
      spaceBetween={10}
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
      <SwiperSlide>
        <SwiperItem
          img="/images/continents/africa.jpg"
          continent="África"
          subtitle="Onde há muitos animais."
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          img="/images/continents/asia.jpg"
          continent="Ásia"
          subtitle="Sua maravilhosa cultura oriental."
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          img="/images/continents/north_america.jpg"
          continent="América do Norte"
          subtitle="Baixo preço em tecnologias."
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          img="/images/continents/south_america.jpg"
          continent="América do Sul"
          subtitle="O continente dos maiores rios do planeta."
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          img="/images/continents/oceania.jpg"
          continent="Oceânia"
          subtitle="Continente com milhares de ilhas paradisíacas."
        />
      </SwiperSlide>
    </Swiper>
  )
}