import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import Favorites from "./../screens/Favorites";
import Account from "./../screens/Account";
import Pokedex from "./../screens/Pokedex";
import PokedexScren from "./PokedexScren";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favotitos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerTitle: "",
          headerTransparent: false,
          headerStyle: {
            //backgroundColor: "#f4511e",
            //height: 0, // Cambia la altura del encabezado aquí
          },
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScren}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          headerTitle: "",
          //headerTitleAlign: "center",
          headerTransparent: false,
          headerStyle: {
            //backgroundColor: "#f4511e",
            height: 50, // Cambia la altura del encabezado aquí
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle: "",
          //headerTitleAlign: "center",
          headerStyle: {
            //backgroundColor: "#f4511e",
            height: 50, // Cambia la altura del encabezado aquí
          },
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require("./../assets/pokeball.png")}
      style={{ height: 75, width: 75, top: -20 }}
    />
  );
}
