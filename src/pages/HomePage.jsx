import React from "react";
import HeroSlide from "../components/common/HeroSlide";
import { Box } from "@mui/material";
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";
import { books } from "../utils/data";
const HomePage = () => {
  return (
    <>
      <HeroSlide
        mediaType={"books"}
        // mediaCategory={tmdbConfigs.mediaCategory.popular}
      />
      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="popular books">
          <MediaSlide mediaCategory={"popular books"} books={books} />
        </Container>

        <Container header="top rated movies">
          <MediaSlide
          
            books={books}
          />
        </Container>

        <Container header="recommende for you">
          <MediaSlide
          
            books={books}
          />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
