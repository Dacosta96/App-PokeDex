import React, { Component } from "react";
import { Text, View } from "react-native";
import { keyboardProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function Pokemon(props) {
  const { route } = props;
  console.log(route);
  return (
    <View>
      <Text> este es un pokemon jjj </Text>
    </View>
  );
}
