import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import MyInput from "@/components/Form/MyInput";
import { Button } from "react-native-paper";

export default function Market() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = () => {
    console.log(username, email, mobile, visaNumber);

    const formDataFile = new FormData();
    formDataFile.append("attachment", attachment);
    formDataFile.append("username", username);
    formDataFile.append("email", email);
    formDataFile.append("mobileNumber", mobile);
    formDataFile.append("visaNumber", visaNumber);

    console.log(formDataFile);
  };

  return (
    <SafeAreaView className="flex ">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex flex-col px-4 gap-4">
        <MyInput label="Username" type="text" value={username} onChangeText={setUsername} />
        <MyInput label="Email" type="text" value={email} onChangeText={setEmail} />
        <MyInput label="Mobile Number" type="text" value={mobile} onChangeText={setMobile} />
        <MyInput label="Visa Number" type="text" value={visaNumber} onChangeText={setVisaNumber} />
        <MyInput label="Attachment" type="file" value={attachment} onChangeText={setAttachment} />

        {/* submit button */}
        <Button mode="contained" onPress={handleSubmit} className="mt-4">
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
