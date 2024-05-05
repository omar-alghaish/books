import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    display: "home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "top books",
    path: "/books/top-books",
    icon: <SlideshowOutlinedIcon />,
    state: "top-books",
  },
  {
    display: "discover",
    path: "/discover",
    icon: <LiveTvOutlinedIcon />,
    state: "discover",
  },

  {
    display: "categories",
    path: "/categories",
    icon: <SearchOutlinedIcon />,
    state: "categories",
  },
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite",
  },
  {
    display: "reading",
    path: "/reading",
    icon: <RateReviewOutlinedIcon />,
    state: "reading",
  },
  {
    display: "history ",
    path: "/history",
    icon: <LockResetOutlinedIcon />,
    state: "history",
  },
];

const menuConfigs = { main, user };

export default menuConfigs;
