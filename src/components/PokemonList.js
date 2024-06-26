import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemoCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemoCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      // ListFooterComponent={
      //   isNext && (
      //     <ActivityIndicator
      //       // size="large"
      //       // style={styles.spinner}
      //       // color="#AEAEAE"
      //     />
      //   )
      // }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
