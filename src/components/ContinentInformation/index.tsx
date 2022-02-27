import { Flex, Icon, Text } from "@chakra-ui/react";
import { Quantities } from "./Quantities";
import { AiOutlineInfoCircle } from 'react-icons/ai'

export function ContinentInformation() {
  return (
    <Flex
      mx="8rem"
      mb="5rem"
      mt="4rem"
      gap="5rem"
      align="center"
    >
      <Text
        fontSize="1.2rem"
        align="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Quantities quantity={50}>
        países
      </Quantities>
      <Quantities quantity={60}>
        línguas
      </Quantities>
      <Quantities quantity={27}>
        cidades +100 <Icon as={AiOutlineInfoCircle} color="gray.500" opacity={0.5} fontSize="1rem" />
      </Quantities>
    </Flex>
  )
}