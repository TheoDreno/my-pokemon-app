import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useMatch } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { Grid, Slider, Typography } from "@mui/material";
import Fuse from "fuse.js";
import { Box } from "@mui/system";

const PokemonsList = () => {
  const [dataList, setDataList] = useState([]);
  const [rangeValue, setRangeValue] = useState(12);
  const options = {
    includeScore: true,
  };

  const fuse = new Fuse(dataList, options);

  const result = fuse.search("ivy");

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setDataList(res.data.results));
  }, []);

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setDataList(value);
  }

  return (
    <div>
      <center>
        <Box width={300} margin="2%">
          <Slider
            defaultValue={rangeValue}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={1}
            max={20}
            onChange={(e) => setRangeValue(e.target.value)}
            color="secondary"
          />
        </Box>
      </center>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        margin="2%"
      >
        {dataList.slice(0, rangeValue).map((item) => (
          <Grid item xs={3}>
            <PokemonCard url={item.url} name={item.name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokemonsList;
