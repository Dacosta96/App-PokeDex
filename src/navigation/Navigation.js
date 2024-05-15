import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import Favorites from "./../screens/Favorites";
import Account from "./../screens/Account";
import Pokedex from "./../screens/Pokedex";

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
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          headerTitle: "Pokedex",
          headerTitleAlign: "center",
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
          headerTitle: "Mi cuenta",
          headerTitleAlign: "center",
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
