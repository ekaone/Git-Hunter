import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import PageHeader from "./components/page-header";
import GroupTitle from "./components/group-title";
import Filters from "./components/filters";
import Repo from "./components/repo";

export default function Feed() {
  return (
    <>
      <Box maxWidth="1200px" mx="auto">
        <PageHeader />

        <Flex alignItems="center" justifyContent="space-between" mb="25px">
          <GroupTitle />
          <Filters />
        </Flex>

        <Box>
          <Repo />
        </Box>
      </Box>
    </>
  );
}
