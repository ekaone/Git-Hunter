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

export default function Filters() {
  const [viewType, setViewType] = useState("grid");

  return (
    <>
      <Stack isInline>
        <Select>
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
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem as="a" href="#">
              Attend a Workshop
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
            onClick={() => setViewType("grid")}
          >
            Grid
          </Button>
          <Button
            h="100%"
            bg={viewType === "list" ? "gray.200" : "white"}
            fontWeight={400}
            roundedLeft={0}
            leftIcon={FaList}
            onClick={() => setViewType("list")}
          >
            List
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
