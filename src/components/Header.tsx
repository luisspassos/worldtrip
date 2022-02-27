import { Center, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Center 
      h={{
        base: "3rem",
        sm: "4rem",
        lg: "20",
      }} 
      position="relative"
    >
      {asPath.startsWith('/continente') && (
        <IconButton
          d="flex"
          justifyContent="center"
          position="absolute"
          left="5.75rem"
          aria-label="Voltar para a pagina anterior"
          icon={<IoIosArrowBack />}
          fontSize="1.2rem"
          variant="unstyled"
        />
      )}
      
      <Image 
        src="/images/logo.svg" 
        alt="worldtrip"
        h={{
          base: "6",
          sm: "8",
          lg: "10"
        }}
      />
    </Center>
  )
}