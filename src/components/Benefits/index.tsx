import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { Benefit } from "./Benefit";
import { ListBenefit } from "./ListBenefit";

export function Benefits() {
  return (
    <>
      <Flex
        as="ul"
        d={{
          base: 'none',
          md: 'flex'
        }}
        justify="center"
        gap="3rem 6rem"
        wrap="wrap"
        px="8rem"
        mt={{
          base: "3rem",
          md: "4rem",
          lg: "6rem"
        }}
      >
        <Benefit 
          text="vida noturna"
          iconAlt="Vida noturna"
          icon="/images/cocktail_icon.svg"
        />

        <Benefit 
          text="praia"
          iconAlt="Praia"
          icon="/images/surf_icon.svg"
        />

        <Benefit 
          text="moderno"
          iconAlt="Edifício"
          icon="/images/building_icon.svg"
        />

        <Benefit 
          text="clássico"
          iconAlt="Ponto turístico"
          icon="/images/tourist_spot_icon.svg"
        />

        <Benefit 
          text="e mais..."
          iconAlt="Mundo"
          icon="/images/earth_icon.svg"
        />
      </Flex>
      <Flex
        as="ul"
        d={{
          base: 'flex',
          md: 'none'
        }}
        mt="2.3rem"
        justify="center"
        fontWeight={500}
        fontSize="1.3rem"
        w="100%"
        gap="2rem"
        px="4rem"
        wrap="wrap"
      >
        <ListBenefit benefit="vida noturna"/>
        <ListBenefit benefit="praia"/>
        <ListBenefit benefit="moderno"/>
        <ListBenefit benefit="clássico"/>
        <ListBenefit benefit="e mais..."/>
      </Flex>
    </>
    
  )
}