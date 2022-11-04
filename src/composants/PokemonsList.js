import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useMatch } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonsList = () => {
  const [dataList, setDataList] = useState([]);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setDataList(res.data.results));
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {dataList.map((item) => (
        <PokemonCard url={item.url} name={item.name} />
      ))}
    </div>
  );
};

export default PokemonsList;
