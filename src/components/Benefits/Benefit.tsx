import { Flex, Image, Text } from "@chakra-ui/react";

type BenefitProps = {
  icon: string;
  iconAlt: string;
  text: string;
}

export function Benefit({ icon, text, iconAlt }: BenefitProps) {
  return (
    <Flex
      as="li"
      direction="column"
      align="center"
      gap="0.6rem"
      w="6.5625rem"
    >
      <Image src={icon} alt={iconAlt} h="4.375rem"/>
      <Text color="gray.700" fontWeight={600}>{text}</Text>
    </Flex>
  )
}