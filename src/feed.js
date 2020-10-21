import React, { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/core";
import PageHeader from "./components/page-header";
import GroupTitle from "./components/group-title";
import Filters from "./components/filters";
import Repo from "./components/repo";

export default function Feed() {
  const [viewType, setViewType] = useState("grid");

  return (
    <>
      <Box maxWidth="1200px" mx="auto">
        <PageHeader />

        <Flex alignItems="center" justifyContent="space-between" mb="25px">
          <GroupTitle />
          <Filters viewType={viewType} handlerViewType={setViewType} />
        </Flex>

        <SimpleGrid columns={viewType === "grid" ? 3 : 1} spacing={2}>
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
        </SimpleGrid>
      </Box>
    </>
  );
}
