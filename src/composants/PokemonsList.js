import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useMatch } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { Grid, Typography } from "@mui/material";

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {dataList.map((item) => (
          <Grid item xs={3}>
            <PokemonCard url={item.url} name={item.name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokemonsList;
