import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Stack,
  Button
} from "@chakra-ui/core";
import { GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";

export default function Repo() {
  return (
    <>
      <Box borderWidth={1} bg="white" p="15px" rounded="5px">
        <Flex alignItems="center" mb="15px">
          <Image src="/git-logo.svg" size="30px" rounded="full" />
          <Box ml="10px">
            <Heading fontSize="17px">ekaone</Heading>
            <Text fontSize="13px">View Profile</Text>
          </Box>
        </Flex>

        <Box mb="25px">
          <Box mb="10px">
            <Heading
              as="a"
              href="#"
              target="_blank"
              color="purple.600"
              fontSize="20px"
            >
              githunter
            </Heading>
            <Text fontSize="14px" color="gray.600">
              built by &middot;{" "}
              <Link fontWeight={600} href="#" target="_blank">
                ekaone
              </Link>{" "}
              &middot; Aug 29, 2020{" "}
            </Text>
          </Box>

          <Text fontSize="14px" color="gray.600">
            REST API using Node.js without a framework
          </Text>
        </Box>

        <Stack isInline>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoStar}
            fontSize="14px"
            variant="link"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            3567
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoRepoForked}
            fontSize="14px"
            variant="link"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            78
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoIssueOpened}
            fontSize="14px"
            variant="link"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            680
          </Button>
        </Stack>
      </Box>
    </>
  );
}
