import React, { useState } from "react";
import moment from "moment";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/core";
import PageHeader from "./components/page-header";
import GroupTitle from "./components/group-title";
import Filters from "./components/filters";
import Repo from "./components/repo";

export default function Feed() {
  const [viewType, setViewType] = useState("grid");
  const [language, setLanguage] = useState();
  const [dateJump, setDateJump] = useState("day");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(
    moment()
      .subtract(1, "day")
      .format()
  );

  return (
    <>
      <Box maxWidth="1200px" mx="auto">
        <PageHeader />

        <Flex alignItems="center" justifyContent="space-between" mb="25px">
          <GroupTitle />
          <Filters
            viewType={viewType}
            handlerViewType={setViewType}
            language={language}
            handlerChangeLanguage={setLanguage}
            handlerDateChange={setDateJump}
          />
        </Flex>
        <Box>
          <Text>
            {language} &middot; {dateJump} &middot; {endDate}
          </Text>
        </Box>
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
