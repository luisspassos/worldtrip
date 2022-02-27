import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type QuantitiesProps = {
  quantity: number;
  children: ReactNode;
}

export function Quantities({ quantity, children }: QuantitiesProps) {
  return (
    <Flex
      direction="column"
      align="center"
      shrink={0}
    >
      <Text 
        as="strong"
        color="yellow.400"
        fontWeight={600}
        d="block"
        fontSize="2.8rem"
        lineHeight="3rem"         
      >
        {quantity}
      </Text>
      <Text 
        as="span"
        fontWeight={600}
        fontSize="1.2rem"
        d="flex"
        alignItems="center"
        gap=".3rem"
      >
        {children}
      </Text>
    </Flex>
  )
}