/* eslint-disable react/prop-types */

import { Button } from "@chakra-ui/react";

function PrimaryButton({ title, h, w, onClick}) {
  return (
    <Button colorScheme="teal" variant='solid' height={h}
    width={w} onClick={onClick}>
    {title}
  </Button>
  )
}

export default PrimaryButton;