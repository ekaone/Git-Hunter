import React from "react";
import { Button, Flex, Stack } from "@chakra-ui/core";
import { FaGithub, FaChrome, FaTwitter } from "react-icons/fa";
import Brand from "./brand";

export default function PageHeader() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pt="10px"
        mb="30px"
      >
        <Brand />
        <Stack isInline>
          <Button leftIcon={FaGithub}>View Source</Button>
          <Button variantColor="yellow" leftIcon={FaChrome}>
            Use Extesion
          </Button>
          <Button variantColor="blue" leftIcon={FaTwitter}>
            Tweet
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
