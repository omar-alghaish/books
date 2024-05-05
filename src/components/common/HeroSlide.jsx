import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";

import { setGlobalLoading } from "../../redux/features/globalLodaingSlice";
import { routesGen } from "../../routes/router";

import uiConfigs from "../../configs/ui.configs";

import CircularRate from "./CircularRate";


import { books } from "../../utils/data";
const HeroSlide = ({ mediaType, mediaCategory }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    setMovies(books);
  });

  return (
    <Box
      sx={{
        position: "relative",
        color: "primary.contrastText",
        "&::before": {
          content: '""',
          width: "100%",
          height: "30%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none",
          ...uiConfigs.style.gradientBgImage[theme.palette.mode],
        },
      }}
    >
      <Swiper
        grabCursor={true}
        loop={true}
        style={{ width: "100%", height: "max-content" }}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                paddingTop: {
                  xs: "130%",
                  sm: "80%",
                  md: "60%",
                  lg: "45%",
                },
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundImage: `url(${movie?.image})`,
                // backgroundImage: `url(${tmdbConfigs.backdropPath(
                //   movie.backdrop_path || movie.poster_path
                // )})`,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                ...uiConfigs.style.horizontalGradientBgImage[
                  theme.palette.mode
                ],
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                paddingX: { sm: "10px", md: "5rem", lg: "10rem" },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingX: "30px",
                  color: "text.primary",
                  width: { sm: "unset", md: "30%", lg: "40%" },
                }}
              >
                <Stack spacing={4} direction="column">
                  {/* title */}
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                    fontWeight="700"
                    sx={{
                      ...uiConfigs.style.typoLines(2, "left"),
                    }}
                  >
                    {movie?.title || movie?.name}
                  </Typography>
                  {/* title */}

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {/* rating */}
                    <CircularRate value={movie?.vote_average} />
                    {/* rating */}

                    <Divider orientation="vertical" />
                    {/* genres */}
                    {[...movie?.categories]?.map((category, index) => (
                      <Chip
                        variant="filled"
                        color="primary"
                        key={index}
                        label={category?.name}
                      />
                    ))}
                    {/* genres */}
                  </Stack>

                  {/* overview */}
                  <Typography
                    variant="body1"
                    sx={{
                      ...uiConfigs.style.typoLines(3),
                    }}
                  >
                    {movie?.discreption}
                  </Typography>
                  {/* overview */}

                  {/* buttons */}
                  <Button
                    variant="contained"
                    size="large"
                    // startIcon={<PlayArrowIcon />}
                    component={Link}
                    to={routesGen.mediaDetail(mediaType, movie.id)}
                    sx={{ width: "max-content" }}
                  >
                    read now
                  </Button>
                  {/* buttons */}
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default HeroSlide;
