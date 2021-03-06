import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { SwiperItem } from './SwiperItem';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Skeleton } from '@chakra-ui/react';

type Continent = {
  continent: string;
  subtitle: string;
  img: string;
  slug: string;
};

type ContinentsResponse = {
  continents: Continent[];
};

export function SwiperContinents() {
  const [continents, setContinents] = useState<Continent[]>([]);

  async function getContinents() {
    const { data } = await api.get<ContinentsResponse>('continents');
    setContinents(data.continents);
  }

  useEffect(() => {
    getContinents();
  }, []);

  return (
    <Skeleton maxWidth={1120} mx='auto' isLoaded={continents.length !== 0}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='swiperContinents'
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <SwiperItem continent={continent.continent} img={continent.img} subtitle={continent.subtitle} slug={continent.slug} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Skeleton>
  );
}
