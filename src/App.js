import React from "react";
import { Box } from "@chakra-ui/core";
import Feed from "./feed";

function App() {
  return (
    <>
      <Box width="100vw" minHeight="100vh" bg="gray.100" py="5px">
        <Feed />
      </Box>
    </>
  );
}

export default App;
