import React from "react";
import PokemonsList from "../composants/PokemonsList";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <PokemonsList />
    </div>
  );
};

export default HomePage;
