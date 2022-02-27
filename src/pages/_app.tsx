import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import '../styles/global.scss'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'

import { createServer } from "miragejs"

const continents = [
  {
    img: '/images/continents/europe.jpg',
    continent: 'Europa',
    info: {
      resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
      countries: 50,
      languages: 60,
      mostVisitedCities: 27,
    },
    mostVisitedCities: [
      {
        img: 'https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        city: 'Londres',
        country: 'Reino Unido',
        countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
      }
    ],
    subtitle: 'O continente mais antigo',
    slug: 'europa'
  },
  {
    continent: 'África',
    subtitle: 'Onde há muitos animais.',
    info: {
      resume: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005[1]), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.[2]',
      countries: 54,
      languages: 2000,
      mostVisitedCities: 1,
    },
    mostVisitedCities: [
      {
        img: 'https://www.maxmilhas.com.br/blog/wp-content/uploads/2020/09/gettyimages-1170679782_-e1592921872711-770x450.jpg',
        city: 'Johanesburgo',
        country: 'África do Sul',
        countryFlag: 'http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png',
      }
    ],
    img: '/images/continents/africa.jpg',
    slug: 'africa'
  },
  {
    continent: 'Ásia',
    subtitle: 'Sua maravilhosa cultura oriental.',
    info: {
      resume: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
      countries: 50,
      languages: 2.301,
      mostVisitedCities: 1,
    },
    mostVisitedCities: [
      {
        img: 'https://www.maxmilhas.com.br/blog/wp-content/uploads/2020/09/gettyimages-1170679782_-e1592921872711-770x450.jpg',
        city: 'Hong Kong',
        country: 'China',
        countryFlag: 'https://www.significados.com.br/foto/china.jpg',
      }
    ],
    img: '/images/continents/asia.jpg',
    slug: 'asia'
  },
  {
    continent: 'América do Norte',
    subtitle: 'Baixo preço em tecnologias.',
    info: {
      resume: 'A América do Norte é um subcontinente do continente americano, também formado pela América Central e América do Sul. A região limita-se ao leste com o oceano Atlântico, a oeste com o oceano Pacífico, ao norte com o oceano Ártico e ao sul com a América Central e o Caribe.',
      countries: 3,
      languages: 5,
      mostVisitedCities: 1,
    },
    mostVisitedCities: [
      {
        img: 'https://www.segurospromo.com.br/blog/wp-content/uploads/2019/07/destino-america-do-norte-eua-nova-york.jpg',
        city: 'Los Angeles',
        country: 'Estados Unidos',
        countryFlag: 'https://static.todamateria.com.br/upload/ba/nd/bandeira_americana_bb.jpg',
      }
    ],
    img: '/images/continents/north_america.jpg',
    slug: 'america-do-norte'
  },
  {
    continent: 'América do Sul',
    subtitle: 'O continente dos maiores rios do planta.',
    info: {
      resume: 'A América do Sul é um continente[2][3] que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.[4][5] A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
      countries: 12,
      languages: 9,
      mostVisitedCities: 1,
    },
    mostVisitedCities: [
      {
        img: 'https://blog.clubecandeias.com/wp-content/uploads/2018/11/o-que-fazer-em-lima-no-peru-confira-as-nossas-dicas.jpg',
        city: 'Lima',
        country: 'Peru',
        countryFlag: 'https://a-static.mlcdn.com.br/1500x1500/bandeira-do-peru-22x32cm-banderminas/wgilbandeiras/239/c43d775bb1dfd4ab1acd9e9f7f59b8a2.jpg',
      }
    ],
    img: '/images/continents/south_america.jpg',
    slug: 'america-do-sul'
  },
  {
    continent: 'Oceânia',
    subtitle: 'Continente com milhares de ilhas paradisíacas',
    info: {
      resume: "Oceania ou Oceânia[nota 1] é uma região geográfica[1][2][3] composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
      countries: 14,
      languages: 820,
      mostVisitedCities: 1,
    },
    mostVisitedCities: [
      {
        img: 'https://www.estudarfora.org.br/wp-content/uploads/2020/05/sidney.jpg',
        city: 'Sidney',
        country: 'Austrália',
        countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/255px-Flag_of_Australia.svg.png',
      }
    ],
    img: '/images/continents/oceania.jpg',
    slug: 'oceania'
  }
]

createServer({
  routes() {
    this.namespace = "api"

    this.get("/continents", () => {
      return {
        continents 
      }
    })

    this.get("/continents/:slug", (schema, request) => {
      const slug = request.params.slug
      
      return continents.find(continent => continent.slug === slug)
    })

    this.namespace = ""
    this.passthrough()
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
