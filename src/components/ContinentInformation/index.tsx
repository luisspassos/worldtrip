import { Flex, Icon, Skeleton, SkeletonText, Text, Tooltip } from '@chakra-ui/react';
import { Quantities } from './Quantities';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type ContinentInformationProps = {
  resume: string;
  countries: number;
  languages: number;
  mostVisitedCities: number;
};

export function ContinentInformation({ countries, languages, mostVisitedCities, resume }: ContinentInformationProps) {
  return (
    <Flex
      mx={{
        base: '1.5rem',
        md: '3rem',
        lg: '8rem',
      }}
      mb={{
        base: '3rem',
        md: '4rem',
        lg: '5rem',
      }}
      mt={{
        base: '2rem',
        lg: '4rem',
      }}
      gap={{
        base: '1.5rem',
        md: '3rem',
        lg: '3.5rem',
        xl: '5rem',
      }}
      align='center'
      justify='center'
      wrap={{
        base: 'wrap',
        xl: 'nowrap',
      }}
    >
      <Text fontSize='1.2rem' align='justify'>
        <Skeleton>{resume}</Skeleton>
      </Text>
      <Flex
        gap={{
          base: '4rem',
          lg: '5rem',
        }}
        wrap={{
          base: 'wrap',
          lg: 'nowrap',
        }}
        justify='center'
      >
        <Quantities quantity={countries}>países</Quantities>
        <Quantities quantity={languages}>línguas</Quantities>
        <Quantities quantity={mostVisitedCities}>
          cidades +100
          <Tooltip hasArrow label='São as cidades que estão nas 100 mais visitadas do mundo.' aria-label='Mensagem de dica'>
            <span>
              <Icon as={AiOutlineInfoCircle} color='gray.500' opacity={0.5} fontSize='1rem' />
            </span>
          </Tooltip>
        </Quantities>
      </Flex>
    </Flex>
  );
}
