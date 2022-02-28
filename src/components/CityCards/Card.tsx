import { Flex, Heading, Image, Skeleton, SkeletonCircle, Stack, Text, WrapItem } from '@chakra-ui/react';

type CardProps = {
  cityImg: string;
  country: string;
  city: string;
  flagImg: string;
};

export function Card({ country, city, cityImg, flagImg }: CardProps) {
  return (
    <WrapItem flexDirection='column' flexShrink={0} bg='white' w='16rem' borderRadius='.35rem'>
      <Skeleton isLoaded={!!cityImg}>
        <Image objectFit='cover' w='256px' h='173px' borderRadius='.35rem .35rem 0 0' src={cityImg} alt={city} />
      </Skeleton>
      <Flex w='100%' align='center' borderRadius='0 0 .35rem .35rem' borderColor='yellow.100' borderStyle='solid' borderRightWidth='1px' borderLeftWidth='1px' borderBottomWidth='1px' padding='1.5rem 1.3rem' justify='space-between' fontFamily='barlow, sans-serif'>
        <Stack spacing='0.8rem'>
          <Heading as='h3' fontWeight='600' fontSize='1.2rem'>
            <Skeleton isLoaded={!!city}>{city}</Skeleton>
          </Heading>
          <Text fontSize='.9rem' as='small' color='gray.500'>
            <Skeleton isLoaded={!!country}>{country}</Skeleton>
          </Text>
        </Stack>
        <SkeletonCircle isLoaded={!!flagImg}>
          <Image objectFit='cover' w='30px' h='30px' borderRadius='50%' src={flagImg} alt={country} />
        </SkeletonCircle>
      </Flex>
    </WrapItem>
  );
}
