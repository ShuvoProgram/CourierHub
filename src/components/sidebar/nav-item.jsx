/* eslint-disable react/prop-types */
import { Spacer, Stack, Text } from "@chakra-ui/react";
import { chakra, useColorModeValue as mode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  const activeColor = mode("brand.600", "white");
  const activeProps = {
    color: activeColor,
    borderRightColor: props.active && activeColor,
    bg: "blackAlpha.300",
  };

  return (
    <Link to={props.href || ""} style={{ textDecoration: 'none' }}>
      <Stack
        direction="row"
        cursor="pointer"
        px={8}
        py={4}
        spacing={4}
        alignItems="center"
        fontWeight="semibold"
        transition="all .4s ease-in-out"
        borderRightWidth="3px"
        borderRightColor="transparent"
        _hover={activeProps}
        {...(props.active && activeProps)}
      >
        <Icon as={props.icon} fontSize="xl" />
        <Text>{props.name}</Text>
        <Spacer />
        {props.count && (
          <chakra.span
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="pink.50"
            bg="pink.500"
            rounded="full"
          >
            {props.count}
          </chakra.span>
        )}
      </Stack>
    </Link>
  );
};

export default NavItem;