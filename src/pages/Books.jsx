import { Box } from "@mui/material";
import React from "react";
import { books } from "../utils/data";
import MediaSlide from "../components/common/MediaSlide";
import ItemsContainer from "../components/layout/ItemsContainer";

const Books = () => {
  return (
    <Box>
      <ItemsContainer books={books} title="Top books"/>
    </Box>
  );
};

export default Books;
