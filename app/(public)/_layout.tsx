import React from "react";
import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="login" options={{}}></Stack.Screen>
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Create Account",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
