import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { style } from "@mui/system";

const PokemonCard = ({ url, name }) => {
  const [dataPoke, setDataPoke] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-form/${name}`)
      .then((res) => setDataPoke(res.data?.sprites.front_default));
  });

  const handleClick = () => {
    navigate(`/page2/${name}`);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        component="span"
        sx={{
          width: "100%",
        }}
      >
        <Card
          sx={{
            alignContent: "center",
            backgroundColor: "#bdbdbd",
            "&:hover": {
              bgcolor: "grey",
              cursor: "pointer",
            },
          }}
        >
          <center>
            <CardMedia
              component="img"
              src={dataPoke}
              alt="green iguana"
              sx={{ width: "40%" }}
            />
          </center>
          <CardContent>
            <Typography variant="h5">{name}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default PokemonCard;
