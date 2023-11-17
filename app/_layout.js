import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

import { Header, Navbar, SlidingUp } from "../components";

SplashScreen.preventAutoHideAsync();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <_layout />
    </Provider>
  );
};

const _layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Light": require("../assets/fonts/Inter-Light.otf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.otf"),
  });

  const song = useSelector((state)=>state.audioPlayer.song);

  useEffect(() => {
    return song
      ? () => {
          console.log("Unloading Sound");
          song.unloadAsync();
        }
      : undefined;
  }, [song]);

  // load fonts
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

export default AppWrapper;
