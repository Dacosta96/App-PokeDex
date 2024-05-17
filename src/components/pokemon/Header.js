import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemon from "./../../utils/getColorByPokemonType";

export default function Header(props) {
  const pokemonColor = getColorByPokemon(props.pokemon.types[0].type.name);

  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor: pokemonColor }]}>
        <Text style={styles.name}> {capitalize(props.pokemon.name)} </Text>
        <Text style={styles.order}>
          {" "}
          #{`${props.pokemon.order}`.padStart(3, 0)}{" "}
        </Text>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: props.pokemon.sprites.other["official-artwork"]
                .front_default,
            }}
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    //transform: [{ scaleX: 2 }],
  },
  name: {
    top: 30,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 10,
    left: 8,
  },
  order: {
    position: "absolute",
    right: 10,
    top: 40,
    color: "#fff",
    fontSize: 25,
  },
  containerImage: {
    alignItems: "center",
  },
  image: {
    top: 30,
    width: 300,
    height: 300,
  },
});
