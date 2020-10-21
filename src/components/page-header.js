import React from "react";
import { Button, Flex, Stack } from "@chakra-ui/core";
import { FaGithub, FaTwitter } from "react-icons/fa";
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
          <Button
            as="a"
            href="https://github.com/ekaone/Git-Hunter"
            target="_blank"
            leftIcon={FaGithub}
          >
            View Source
          </Button>
          <Button
            variantColor="blue"
            leftIcon={FaTwitter}
            as="a"
            href="https://twitter.com/dannyeka"
            target="_blank"
            leftIcon={FaGithub}
          >
            Tweet
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
