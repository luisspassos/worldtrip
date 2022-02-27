import { Center, IconButton, Image, Link, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import NextLink from "next/link";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Center
      h={{
        base: "3rem",
        sm: "4rem",
        lg: "20",
      }}
      position="relative"
    >
      {asPath.startsWith("/continente") && (
        <NextLink href="/" passHref>
          <Link
            position="absolute"
            left={{
              base: "1.75rem",
              md: "3.75rem",
              lg: "5.75rem",
            }}
          >
            <Tooltip hasArrow label="Voltar para a página anterior" aria-label="Mensagem de dica">
              <IconButton d="flex" justifyContent="center" aria-label="Voltar para a pagina anterior" icon={<IoIosArrowBack />} fontSize="1.2rem" variant="unstyled" />
            </Tooltip>
          </Link>
        </NextLink>
      )}

      <Image
        src="/images/logo.svg"
        alt="worldtrip"
        h={{
          base: "6",
          sm: "8",
          lg: "10",
        }}
      />
    </Center>
  );
}
