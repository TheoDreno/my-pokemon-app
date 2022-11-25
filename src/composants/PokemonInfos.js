import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

const PokemonInfos = ({ name }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const navigate = useNavigate();

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setDataPokemon(res.data));
  });

  const handlePress = () => {
    navigate(`/`);
  };
  console.log(dataPokemon.base_experience);
  return (
    <>
      <center>
        <Box sx={{ width: "80%" }}>
          <Card sx={{ alignContent: "center", backgroundColor: "#b2dfdb" }}>
            <CardContent>
              <Typography variant="h1" fontFamily="Raleway">
                {name}
              </Typography>
            </CardContent>
            <center>
              <CardMedia
                component="img"
                src={dataPokemon.sprites?.front_default}
                alt="green iguana"
                sx={{ width: "20%" }}
              />
            </center>
            <CardContent>
              <Typography fontFamily="Raleway">
                Experiance de base : {dataPokemon.base_experience} xp
              </Typography>
              <Typography fontFamily="Raleway">
                Taille : {dataPokemon.height} decimetres mdr
              </Typography>
              <Typography fontFamily="Raleway">
                Poid : {dataPokemon.weight} grammes
              </Typography>
            </CardContent>
            <Button variant="contained" onClick={handlePress}>
              {" "}
              RETOUR{" "}
            </Button>
          </Card>
        </Box>
      </center>
    </>
  );
};

export default PokemonInfos;
