import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, Button, StyleSheet } from "react-native";
import { getPokemonsFavoriteApi } from "../api/Favorite";
import PokemonList from "../components/PokemonList";
import { useAuth } from "../hooks/useAuth";
import {
  getPokemonDetailsByUrlApi,
  getPokemonDetailsApi,
} from "./../api/Pokemon";
import { useNavigation } from "@react-navigation/native";

export default function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (auth) {
      (async () => {
        const response = await getPokemonsFavoriteApi();

        const pokemonsArray = [];
        for await (const id of response) {
          const pokemonDetails = await getPokemonDetailsApi(id);
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          });
        }
        setPokemons(pokemonsArray);
      })();
    }
  }, [auth, pokemons]);

  return !auth ? (
    <View style={styles.content}>
      <Text style={styles.text}>Es necesario iniciar sesión</Text>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  ) : (
    <PokemonList pokemons={pokemons} />
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
