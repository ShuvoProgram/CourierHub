/* eslint-disable no-sparse-arrays */
import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import Actions from "./actions";
import Info from "./info";
import NavButton from "./nav-button";
// import { routes } from "../sidebar";

const Navbar = () => {

  return (
    <Flex
      layerStyle="card"
      h="4.5rem"
      roundedBottom={[, , "2xl"]}
      alignItems="center"
      p={5}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, , 8]}>
        <Info display={["none", , "flex"]} />
        <NavButton />

        <Spacer display={{ md: "none" }} />
        <Text
          textStyle="default"
          fontSize="xl"
          fontWeight="semibold"
          fontFamily="cursive"
          display={{ md: "none" }}
        >
          {/* {getRoute()} */}
        </Text>
        
        <Spacer />
        <Actions />
      </Stack>
    </Flex>
  );
};

export default Navbar;
