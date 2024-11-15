import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import PasswordInput from "./PasswordInput";

interface Props extends TextInputProps {
  type?: "email" | "password" | "text";
}

export default function MyInput({ type = "text", ...props }: Props) {
  if (type === "password") return <PasswordInput {...props} />;

  return <TextInput {...props} />;
}

MyInput.defaultProps = {
  mode: "outlined",
  outlineStyle: { borderRadius: 30 },
};
