import { Flex, Icon, Text } from "@chakra-ui/react";
import { Quantities } from "./Quantities";
import { AiOutlineInfoCircle } from 'react-icons/ai'

export function ContinentInformation() {
  return (
    <Flex
      mx={{
        base: "1.5rem",
        md: "3rem",
        lg: "8rem",
      }}
      mb={{
        base: "3rem",
        md: "4rem",
        lg: "5rem"
      }}
      mt={{
        base: "2rem",
        lg: "4rem"
      }}
      gap={{
        base: "1.5rem",
        md: "3rem",
        lg: "3.5rem",
        xl: "5rem",
      }}
      align="center"
      justify="center"
      wrap={{
        base: "wrap",
        xl: "nowrap"
      }}
    >
      <Text
        fontSize="1.2rem"
        align="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex
        gap={{
          base: "4rem",
          lg: "5rem",
        }}
        wrap={{
          base: "wrap",
          lg: "nowrap"
        }}
        justify="center"
      >
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
    </Flex>
  )
}