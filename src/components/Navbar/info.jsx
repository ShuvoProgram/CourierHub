import { Flex, Stack, Text } from "@chakra-ui/layout";
// import Logo from "components/logo";

const Info = (props) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      {/* <Logo /> */}
      <Flex direction="column" lineHeight="5">
        <Text fontSize="lg" fontWeight="semibold" textStyle="default">
          Chaktor
        </Text>
        <Text fontSize="sm">anubra266@chaktor.dev</Text>
      </Flex>
    </Stack>
  );
};

export default Info;
