/* eslint-disable no-unused-vars */
import { useToast } from "@chakra-ui/react"

function Toast({message}) {
    const toast = useToast()
  return (
    toast({
        title: `${message} toast`,
        position: 'top-right',
        isClosable: true,
      })
  )
}

export default Toast;