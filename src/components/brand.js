import React from "react";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/core";

export default function Brand() {
  return (
    <>
      <Flex alignItems="center">
        <Image src="/git-logo.svg" size="50px" />
        <Box ml="10px">
          <Heading fontSize="30px">Git Hunter</Heading>
          <Text color="gray.500">Most stars Github projects</Text>
        </Box>
      </Flex>
    </>
  );
}
