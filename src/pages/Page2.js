import React from "react";
import { NavLink } from "react-router-dom";

const Page2 = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  return (
    <div>
      <NavLink to="/"> Retour</NavLink>
    </div>
  );
};

export default Page2;
