import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  SearchIcon,
  styled,
  alpha,
  InputBase,
} from "@mui/material";

const Header = () => {
  return (
    <Box sx={{}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Mon Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
