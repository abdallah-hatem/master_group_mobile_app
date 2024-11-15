import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native-paper";

interface Props extends TextInputProps {}

export default function PasswordInput({ ...props }: Props) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <TextInput
      secureTextEntry={showPassword}
      {...props}
      right={<TextInput.Icon icon={showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)} />}
    />
  );
}
