/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react"
import { Icon } from '@chakra-ui/react'

function IconButton({icon, title, color, h, w, onClick}) {
  return (
    <Button leftIcon={<Icon as={icon} />} colorScheme={color} variant='solid' height={h}
    width={w} onClick={onClick}>
    {title}
  </Button>
  )
}

export default IconButton