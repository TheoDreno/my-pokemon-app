import React from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../PokemonCard";
import { Grid } from "@mui/material";

const ListeDeFavoris = () => {
  const cards = useSelector((state) => state.PageFavoris);

  if (cards.length === 0) {
    return (
      <>
        <h1> Aucun favoris ! </h1>
      </>
    );
  } else {
    return (
      <>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          margin="2%"
        >
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Grid item xs={3}>
                <PokemonCard
                  isChecked={card.isChecked}
                  name={card.name}
                  id={card.id}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </>
    );
  }
};

export default ListeDeFavoris;
