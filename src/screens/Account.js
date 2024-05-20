import React, { Component } from "react";
import { Text, View } from "react-native";
import FormAccount from "../components/auth/FormAccount";
import UserData from "../components/auth/UserData";
import { useAuth } from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <FormAccount />}</View>;
}
