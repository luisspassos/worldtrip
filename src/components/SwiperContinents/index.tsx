import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { SwiperItem } from "./SwiperItem";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

type Continent = {
  continent: string;
  subtitle: string;
  img: string;
  slug: string;
}

type ContinentsResponse = {
  continents: Continent[];
}

export function SwiperContinents() {

  const [continents, setContinents] = useState<Continent[]>([]);

  async function getContinents() {
    const { data } = await api.get<ContinentsResponse>('continents')
    setContinents(data.continents)
  }

  useEffect(() => {
    getContinents()
  }, [])

  console.log(continents)

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
      {continents.map(continent => (
        <SwiperSlide key={continent.slug}>
          <SwiperItem 
            continent={continent.continent}
            img={continent.img}
            subtitle={continent.subtitle}
            slug={continent.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}