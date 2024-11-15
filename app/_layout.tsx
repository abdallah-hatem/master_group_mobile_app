import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";
import { StatusBar } from "react-native";
import "@/i18";
import { dispatch, persistor, store } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { setLang } from "@/store/lang.store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@/i18";
import { MD3LightTheme as DefaultThemePaper, PaperProvider } from "react-native-paper";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    async function getLang() {
      const lang = await AsyncStorage.getItem("language");
      lang && i18n.changeLanguage(lang);
    }

    getLang();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const themePaper = {
    ...DefaultThemePaper,
    colors: {
      ...DefaultThemePaper.colors,
      primary: "purple",
      secondary: "white",
    },
  };

  const InitialLayout = () => {
    const [isLoaded] = useFonts({
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    const isSignedIn = false;

    useEffect(() => {
      if (!isLoaded) return;

      if (isSignedIn) {
        router.replace("/(tabs)/market");
      } else if (!isSignedIn) {
        // @ts-ignore
        router.replace("/(public)/login");
      }
    }, [isSignedIn]);

    return <Slot />;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider value={DefaultTheme}>
          <PaperProvider theme={themePaper}>
            <StatusBar barStyle={"dark-content"} />
            <InitialLayout />
          </PaperProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
