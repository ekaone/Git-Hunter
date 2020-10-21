import React, { useState } from "react";
import {
  Flex,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack
} from "@chakra-ui/core";
import { FaTable, FaList } from "react-icons/fa";

import languages from "../data/languages";

export default function Filters(props) {
  // const [viewType, setViewType] = useState("grid");

  const {
    viewType,
    handlerViewType,
    language,
    handlerChangeLanguage,
    handlerDateChange
  } = props;

  return (
    <>
      <Stack isInline>
        <Select
          value={language}
          onChange={e => handlerChangeLanguage(e.target.value)}
        >
          {languages.map(language => (
            <option key={language.value} value={language.value}>
              {language.label}
            </option>
          ))}
        </Select>

        <Menu>
          <MenuButton
            as={Button}
            bg="white"
            borderWidth={1}
            px="35px"
            fontWeight={400}
            leftIcon="calendar"
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handlerDateChange("day")}>Daily</MenuItem>
            <MenuItem onClick={() => handlerDateChange("week")}>
              Weekly
            </MenuItem>
            <MenuItem onClick={() => handlerDateChange("month")}>
              Monthly
            </MenuItem>
            <MenuItem onClick={() => handlerDateChange("year")}>
              Yearly
            </MenuItem>
          </MenuList>
        </Menu>

        <Stack
          isInline
          spacing={0}
          bg="white"
          borderWidth={1}
          rounded="5px"
          ml="10px"
          alignItems="center"
        >
          <Button
            h="100%"
            bg={viewType === "grid" ? "gray.200" : "white"}
            fontWeight={400}
            roundedRight={0}
            leftIcon={FaTable}
            _focus={{ outline: "none !important" }}
            // onClick={() => setViewType("grid")}
            onClick={() => handlerViewType("grid")}
          >
            Grid
          </Button>
          <Button
            h="100%"
            bg={viewType === "list" ? "gray.200" : "white"}
            fontWeight={400}
            roundedLeft={0}
            leftIcon={FaList}
            _focus={{ outline: "none !important" }}
            // onClick={() => setViewType("list")}
            onClick={() => handlerViewType("list")}
          >
            List
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
