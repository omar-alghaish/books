import {} from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Bookify<span style={{color: theme.palette.primary.main, fontSize:"40px"}}>.</span>
    </Typography>
  );
};

export default Logo;
