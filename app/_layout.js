import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { Header, Navbar, SlidingUp } from "../components";

SplashScreen.preventAutoHideAsync();

const HeaderLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Light": require("../assets/fonts/Inter-Light.otf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.otf"),
  });

  useEffect(() => {
    const loadFont = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };
    loadFont();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Header />
      <Slot />
      <SlidingUp />
      <Navbar />
    </>
  );
};

export default HeaderLayout;
