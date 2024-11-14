import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Register() {
  return (
    <View>
      <Text>Register</Text>
      {/* @ts-ignore */}
      <Button title="Login" onPress={() => router.replace("/(public)/login")} />
    </View>
  );
}
