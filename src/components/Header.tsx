import { Center, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Center h="20">
      <Image 
        src="/images/logo.svg" 
        alt="worldtrip"
        h="10"
      />
    </Center>
  )
}