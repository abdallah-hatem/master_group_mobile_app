import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { findEmptyElements } from "@/helpers/general";
import { SafeAreaView } from "react-native-safe-area-context";
import MyInput from "@/components/Form/MyInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyElements, setEmptyElements] = useState<string[]>([]);

  const handleLogin = () => {
    const value = {
      email,
      password,
    };

    const emptyElements = findEmptyElements(value);

    setEmptyElements(emptyElements);
  };

  return (
    <SafeAreaView className="mx-4">
      <Text className="text-2xl font-bold text-center my-5">Login</Text>
      <TextInput
        error={emptyElements.includes("email")}
        label="Email"
        mode="outlined"
        className="mb-3"
        outlineStyle={{ borderRadius: 30 }}
        value={email}
        onChangeText={setEmail}
      />

      <MyInput label="Password" type="password" value={password} onChangeText={setPassword} />

      <TouchableOpacity onPress={() => router.replace("/register")}>
        <Text className="text-blue-500 underline mt-5 text-center">Dont have an account?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Button mode="contained" onPress={handleLogin} className="mt-5 ">
        Login
      </Button>
    </SafeAreaView>
  );
}
