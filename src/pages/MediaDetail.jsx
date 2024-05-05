import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { LoadingButton } from "@mui/lab";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import CircularRate from "../components/common/CircularRate";
import Container from "../components/common/Container";
import ImageHeader from "../components/common/ImageHeader";

import uiConfigs from "../configs/ui.configs";

import { setGlobalLoading } from "../redux/features/globalLodaingSlice";
import { setAuthModalOpen } from "../redux/features/authModelSlice";
import { addFavorite, removeFavorite } from "../redux/features/userSlice";

import CastSlide from "../components/common/CastSlide";

import MediaSlide from "../components/common/MediaSlide";
import { books } from "../utils/data";
import { IoBookSharp } from "react-icons/io5";

const MediaDetail = () => {
  const { id } = useParams();
  const { user, listFavorites } = useSelector((state) => state.user);

  const [media, setMedia] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [onRequest, setOnRequest] = useState(false);
  const [genres, setGenres] = useState([]);

  const dispatch = useDispatch();

  const videoRef = useRef(null);

  useEffect(() => {
    const theBook = books.find((book) => book?.id == id);
    setMedia(theBook);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return media ? (
    <>
      <ImageHeader
        imgPath={media?.image}
      />
      <Box
        sx={{
          color: "primary.contrastText",
          ...uiConfigs.style.mainContent,
        }}
      >
        <Box
          sx={{
            marginTop: { xs: "-10rem", md: "-15rem", lg: "-20rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Box
              sx={{
                width: { xs: "70%", sm: "50%", md: "40%" },
                margin: { xs: "0 auto 2rem", md: "0 2rem 0 0" },
              }}
            >
              <Box
                sx={{
                  paddingTop: "140%",
                  ...uiConfigs.style.backgroundImage(media?.image),
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                color: "text.primary",
              }}
            >
              <Stack spacing={5}>
                <Typography
                  variant="h4"
                  fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                  fontWeight="700"
                  sx={{
                    ...uiConfigs.style.typoLines(2, "left"),
                  }}
                >
                  {`${media?.title || media?.name} ${
                    media?.date?.split("-")[0]
                  }`}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CircularRate value={media?.vote_average} />
                  <Divider orientation="vertical" />
                  {media?.categories?.map((genre, index) => (
                    <Chip
                      label={genre.name}
                      variant="filled"
                      color="primary"
                      key={index}
                    />
                  ))}
                </Stack>
                <Typography
                  variant="body1"
                  sx={{ ...uiConfigs.style.typoLines(5) }}
                >
                  {media?.discreption}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <LoadingButton
                    variant="text"
                    sx={{
                      width: "max-content",
                      "& .MuiButon-starIcon": { marginRight: "0" },
                    }}
                    size="large"
                    startIcon={
                      isFavorite ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderOutlinedIcon />
                      )
                    }
                    loadingPosition="start"
                    loading={onRequest}
                    // onClick={onFavoriteClick}
                  />
                  <Button
                    variant="contained"
                    sx={{ width: "max-content" }}
                    size="large"
                    startIcon={<IoBookSharp />}
                    onClick={() => videoRef.current.scrollIntoView()}
                  >
                    Read now
                  </Button>
                </Stack>
                {media?.authors && (
                  <Container header="Authors">
                    <CastSlide casts={media?.authors} />
                  </Container>
                )}
              </Stack>
            </Box>
          </Box>
        </Box>
        
        <Container header="you may also like">
          <MediaSlide
            mediaType={"books"}
          />
        </Container>

      </Box>
    </>
  ) : null;
};

export default MediaDetail;
