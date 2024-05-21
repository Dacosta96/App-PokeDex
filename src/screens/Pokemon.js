import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getPokemonDetailsApi } from "./../api/Pokemon";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import Favorite from "../components/pokemon/Favorite";
import { useAuth } from "../hooks/useAuth";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  //console.log(pokemon);
  return (
    <SafeAreaView>
      <Header pokemon={pokemon} />
      <Type pokemon={pokemon} />
      <Stats pokemon={pokemon} />
    </SafeAreaView>
  );
}
