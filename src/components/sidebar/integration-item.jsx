/* eslint-disable react/prop-types */
import { IconButton } from "@chakra-ui/button";
import { Stack, Text } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/react";

const IntegrationItem = (props) => {
  const hoverColor = mode("brand.600", "white");
  return (
    <Stack
      direction="row"
      cursor="pointer"
      px={8}
      py={3}
      fontWeight="semibold"
      alignItems="center"
      _hover={{
        color: hoverColor,
        bg: "blackAlpha.300",
      }}
      transition="all .4s ease-in-out"
      spacing={4}
    >
      <IconButton
        aria-label="Interation"
        size="xs"
        variant="outline"
        isRound
        colorScheme={props.scheme}
        icon={<Icon as={props.icon} />}
      />
      <Text>{props.name}</Text>
    </Stack>
  );
};

export default IntegrationItem;
