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
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ titre }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/favoris");
  };

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
            {titre}
          </Typography>
          <Button variant="contained" color="success" onClick={handleOnClick}>
            Mes favoris
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
