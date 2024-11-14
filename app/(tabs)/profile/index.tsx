import { View, Text, SafeAreaView, Switch } from "react-native";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { dispatch, RootState } from "@/store";
import { setLang } from "@/store/lang.store";
import { useSelector } from "react-redux";

export default function Profile() {
  const { t, i18n } = useTranslation();
  const { lang } = useSelector((state: RootState) => state.lang);
  const [isArabic, setIsArabic] = useState(false);

  console.log(lang);
  
  useEffect(() => {
    setIsArabic(lang === "ar");
  }, [lang]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    dispatch(setLang(lang));
    setIsArabic(lang === "ar");
  };

  return (
    <SafeAreaView>
      <Text className="text-2xl font-bold">{t("profile")}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>{t("English")}</Text>
        <Switch
          value={isArabic}
          onValueChange={() => changeLanguage(isArabic ? "en" : "ar")}
        />
        <Text>{t("Arabic")}</Text>
      </View>
    </SafeAreaView>
  );
}
