import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardHeader,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../store/Redux";

const PokemonCard = (props) => {
  const [dataPoke, setDataPoke] = useState([]);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const [isFav, setIsFav] = useState();

  const dispatch = useDispatch();
  const pageFavorisState = useSelector((state) => state.PageFavoris);

  useEffect(() => {
    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-form/${props.name}`)
        .then((res) => setDataPoke(res.data?.sprites.front_default));
    } catch (error) {
      return error;
    }
  });

  useEffect(() => {
    let includeId = pageFavorisState.find((card) => card.name === props.name);
    if (includeId) {
      setIsChecked(true);
    }
    if (!!isChecked) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  });

  const handleClick = () => {
    navigate(`/page2/${props.name}`);
  };

  const handlePressFav = (event) => {
    if (!isChecked) {
      setIsChecked(true);
      dispatch(
        addCard({
          id: props.id,
          name: props.name,
          isChecked: true,
        })
      );
      console.log("ajouté aux favoris");
    } else {
      if (event.target.baseURI.includes("PageFavoris")) {
        dispatch(removeCard(props.name));
      } else {
        setIsChecked(false);
        dispatch(removeCard(props.name));
        console.log("suprimé des favoris");
      }
    }
  };

  return (
    <>
      <Box
        component="span"
        sx={{
          width: "100%",
        }}
      >
        <Card
          sx={{
            backgroundColor: "#bdbdbd",
            "&:hover": {
              bgcolor: "grey",
            },
          }}
        >
          <CardHeader
            action={
              <IconButton onClick={handlePressFav}>
                {isFav ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </IconButton>
            }
          />

          <center>
            <CardContent
              onClick={handleClick}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <CardMedia
                component="img"
                src={dataPoke}
                alt="green iguana"
                sx={{ width: "40%" }}
              />
              <Typography variant="h5">{props.name}</Typography>
            </CardContent>
          </center>
        </Card>
      </Box>
    </>
  );
};

export default PokemonCard;
