import { HStack, Image, Progress, Text, VStack } from "@chakra-ui/react";
import logo from '../../assets/corierHub_logo.png'

function PreLoading() {
  return (
    <VStack
    w='100%'
    h='100vh'
    spacing='4'
    justifyContent='center'
    alignItems='center'
  >
    <Image src={logo} width='150px' />
    <Progress size='xs' w='40%' colorScheme='teal' isIndeterminate />
    <HStack>
      <Text fontWeight='300' color='gray.400'>
        Fastest delivery Your Products
      </Text>
    </HStack>
  </VStack>
  )
}

export default PreLoading;