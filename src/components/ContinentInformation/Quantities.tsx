import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type QuantitiesProps = {
  quantity: number;
  children: ReactNode;
};

export function Quantities({ quantity, children }: QuantitiesProps) {
  return (
    <Flex
      direction='column'
      align={{
        base: 'start',
        lg: 'center',
      }}
      shrink={0}
    >
      <Text
        as='strong'
        color='yellow.400'
        fontWeight={600}
        d='block'
        fontSize={{
          base: '2.2rem',
          md: '2.5rem',
          lg: '2.8rem',
        }}
        lineHeight='3rem'
      >
        {quantity}
      </Text>
      <Text
        as='span'
        fontWeight={{
          base: 400,
          md: 600,
        }}
        fontSize={{
          base: '1.6rem',
          md: '1.4rem',
          lg: '1.2rem',
        }}
        d='flex'
        alignItems='center'
        gap='.3rem'
      >
        {children}
      </Text>
    </Flex>
  );
}
