import { Flex, Box } from "@chakra-ui/react";

export default function Page({ main }) {
  return (
    <Flex minHeight="100vh" width="98.9vw" background="#F2F5F5">
      <Box zIndex={2}>{main}</Box>
    </Flex>
  );
}
