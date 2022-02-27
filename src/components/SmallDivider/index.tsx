import { Divider } from "@chakra-ui/react";

export function SmallDivider() {
  return (
    <Divider 
      border={0}
      bg="gray.700"
      h={{
        base: '1px',
        md: '2px',
        lg: '3px'
      }}
      w="4rem"
      mx="auto"
      my={{
        base: "2rem",
        md: "4rem"
      }}
      opacity={1}
    />
  )
}