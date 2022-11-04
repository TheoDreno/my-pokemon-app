import React from "react";
import PokemonsList from "../composants/PokemonsList";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <PokemonsList />
      <NavLink to="/Page2"> Acces Page2</NavLink>
    </div>
  );
};

export default HomePage;
