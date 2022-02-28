import { Flex, Heading, Skeleton } from '@chakra-ui/react';

type ContinentImageProps = {
  img: string;
  continent: string;
};

export function ContinentImage({ img, continent }: ContinentImageProps) {
  return (
    <Skeleton isLoaded={!!img && !!continent}>
      <Flex
        bgImage={`url(${img})`}
        bgSize='cover'
        bgColor='gray.500'
        bgPosition='center'
        height={{
          base: '15.125rem',
          md: '23.125rem',
          lg: '28.125rem',
        }}
        align={{
          base: 'center',
          md: 'end',
        }}
        justify={{
          base: 'center',
          md: 'start',
        }}
      >
        <Heading
          as='h1'
          color='gray.200'
          fontWeight={600}
          textShadow='2px 2px 4px #000000bc'
          mx={{
            base: 0,
            md: '9rem',
          }}
          my={{
            base: 0,
            md: '5rem',
          }}
          fontSize='2.8rem'
        >
          {continent}
        </Heading>
      </Flex>
    </Skeleton>
  );
}
