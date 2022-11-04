import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ url, name }) => {
  const [dataPoke, setDataPoke] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => setDataPoke(res.data));
  }, []);

  return (
    <div>
      <p>{dataPoke.game_index}</p>
    </div>
  );
};

export default PokemonCard;

/*{dataPoke.map((item) => (
  <li>{item.id}</li>
))}*/
