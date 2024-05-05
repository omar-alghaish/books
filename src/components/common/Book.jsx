import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import uiConfigs from "../../configs/ui.configs";
import CircularRate from "./CircularRate";
import { IoBookSharp } from "react-icons/io5";

const Book = ({ book, fullWidth }) => {
  const { id } = useParams();

  return (
    <Link to={`/book/${book?.id}`}>
      <Box
        sx={{
          // height:"300px",
          aspectRatio: "2/3",

          width:fullWidth ? "100%" : "200px",
          ...uiConfigs.style.backgroundImage(book?.image),
          //   paddingTop: "160%",
          "&:hover .media-info": { opacity: 1, bottom: 0 },
          "&:hover .media-back-drop, &:hover .media-play-btn": { opacity: 1 },
          color: "primary.contrastText",
        }}
      >
        <>
          {/* {favoriteUtils.check({ listFavorites, mediaId: media.id }) && (
              <FavoriteIcon
                color="primary"
                sx={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  fontSize: "2rem"
                }}
              />
            )} */}
          <Box
            className="media-back-drop"
            sx={{
              opacity: { xs: 1, md: 0 },
              transition: "all 0.3s ease",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
            }}
          />
          <Button
            className="media-play-btn"
            variant="contained"
            startIcon={<IoBookSharp />}
            sx={{
              display: { xs: "none", md: "flex" },
              opacity: 0,
              transition: "all 0.3s ease",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              "& .MuiButton-startIcon": { marginRight: "-4px" },
            }}
          />
          <Box
            className="media-info"
            sx={{
              transition: "all 0.3s ease",
              opacity: { xs: 1, md: 0 },
              position: "absolute",
              bottom: { xs: 0, md: "-20px" },
              width: "100%",
              height: "max-content",
              boxSizing: "border-box",
              padding: { xs: "10px", md: "2rem 1rem" },
            }}
          >
            <Stack spacing={{ xs: 0, md: 0 }}>
              {book?.vote_average && (
                <CircularRate value={book?.vote_average} />
              )}

              <Typography>{book?.date}</Typography>

              <Typography
                variant="body1"
                fontWeight="700"
                sx={{
                  fontSize: "1rem",
                  ...uiConfigs.style.typoLines(1, "left"),
                }}
              >
                {book?.title}
              </Typography>
            </Stack>
          </Box>
        </>
      </Box>
    </Link>
  );
};

export default Book;
