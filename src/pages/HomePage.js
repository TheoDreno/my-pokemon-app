import React from "react";
import PokemonsList from "../composants/PokemonsList";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Header from "../composants/Header";

const HomePage = () => {
  return (
    <div>
      <Header titre="Mon pokedex" />
      <PokemonsList />
    </div>
  );
};

export default HomePage;
