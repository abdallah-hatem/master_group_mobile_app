import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import MyInput from "@/components/Form/MyInput";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { ADD_CASE, GET_CASE } from "@/api/case";

export default function Market() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = () => {
    console.log(username, email, mobile, visaNumber);

    const formDataFile = new FormData();
    if (attachment) {
      const fileToUpload = {
        uri: attachment,
        name: attachment.split("/").pop() || "photo.jpg",
        type: "image/jpeg",
      };
      formDataFile.append("attachment", fileToUpload as any);
    }
    formDataFile.append("username", username);
    formDataFile.append("email", email);
    formDataFile.append("mobileNumber", mobile);
    formDataFile.append("visaNumber", visaNumber);

    console.log(formDataFile, "formDataFile");
    console.log(attachment, "attachment");

    GET_CASE().then((res) => {
      console.log(res, "res");
    });

    // ADD_CASE(formDataFile).then((res) => {
    //   console.log(res, "res");
    // });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ["images"],
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setAttachment(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex ">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex flex-col px-4 gap-4">
        <MyInput label="Username" type="text" value={username} onChangeText={setUsername} />
        <MyInput label="Email" type="text" value={email} onChangeText={setEmail} />
        <MyInput label="Mobile Number" type="text" value={mobile} onChangeText={setMobile} />
        <MyInput label="Visa Number" type="text" value={visaNumber} onChangeText={setVisaNumber} />
        <MyInput label="Attachment" type="file" value={attachment} onChangeText={setAttachment} />

        <Button mode="contained" onPress={pickImage} className="mt-4">
          Pick Image
        </Button>

        {/* submit button */}
        <Button mode="contained" onPress={handleSubmit} className="mt-4">
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
