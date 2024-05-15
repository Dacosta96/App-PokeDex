import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import PokemoCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemoCard pokemon={item} />}
    />
  );
}
