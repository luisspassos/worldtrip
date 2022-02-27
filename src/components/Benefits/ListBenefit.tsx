import { WrapItem } from "@chakra-ui/react";

type ListBenefitProps = {
  benefit: string;
}

export function ListBenefit({ benefit }: ListBenefitProps) {
  return (
    <WrapItem
      _before={{
        content: '"●"',
        color: 'yellow.400',
        fontWeight: 'bold',
        display: 'inline-block',
        width: '1em',
        marginLeft: '-1em'
      }}
    >
      {benefit}
    </WrapItem>
  )
}