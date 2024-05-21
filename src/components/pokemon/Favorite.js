import React, { Component, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/Favorite";

export default function Favorite(props) {
  const { id } = props;

  const [isFavorite, setIsFavorite] = useState(undefined);
  console.log(isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const removeFavorite = () => {
    console.log("eliminar de favoritos");
  };

  return (
    <Icon
      name="heart"
      color={isFavorite ? "red" : "white"}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
