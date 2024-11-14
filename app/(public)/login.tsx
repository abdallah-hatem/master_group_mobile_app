import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      {/* @ts-ignore */}
      <Button title="Register" onPress={() => router.replace("/register")} />
    </View>
  );
}
