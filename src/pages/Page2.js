import React from "react";
import { useParams } from "react-router-dom";
import PokemonInfos from "../composants/PokemonInfos";

const Page2 = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <PokemonInfos name={name} />
    </>
  );
};

export default Page2;
