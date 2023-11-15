import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Audio } from "expo-av";

import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import {
  setAudioTitleAndArtist,
  setIsPlaying,
  setIsloading,
} from "../redux/features/audioPlayerSlice";

import { Header, Navbar, SlidingUp } from "../components";
import { useGetAllSongsQuery } from "../redux/services/song";

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
  // const [sound, setSound] = useState();
  // const dispatch = useDispatch();

  // const playNewSound = async () => {
  //   console.log("Loading Sound");
  //   dispatch(setAudioTitleAndArtist({ title: "coba dulu aja", artistName: "ehem" }));
  //   dispatch(setIsloading(true));
  //   dispatch(setIsPlaying(true));
  //   const { sound } = await Audio.Sound.createAsync({
  //     uri: "https://firebasestorage.googleapis.com/v0/b/vocalify-d0c53.appspot.com/o/x2mate.com%20-%20%F0%9F%8D%80%20Chill%20Instrumental%20%5BNon%20Copyrighted%20Music%5D%20_Embrace_%20by%20%40Sappheiros%20%20%F0%9F%87%BA%F0%9F%87%B8%20(128%20kbps).mp3?alt=media&token=858b0998-7189-480c-ab9a-14278f16d414",
  //   });
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  //   dispatch(setIsloading(false));
  // };

  // const playSound = async () => {
  //   console.log("play Sound");
  //   await sound.playAsync();
  //   dispatch(setIsPlaying(true));
  // };

  // const stopSound = async () => {
  //   console.log("Pause Sound");
  //   await sound.pauseAsync();
  //   dispatch(setIsPlaying(false));
  // };


  // here
  const dispatch = useDispatch();
  const song = useSelector((state)=>state.audioPlayer.song);

  const playNewSound = async ({ title, artistName, songUrl, song }) => {
    console.log("Loading Sound");
    dispatch(setIsloading(true));
    dispatch(setIsPlaying(true));
    const { sound } = await Audio.Sound.createAsync({
      uri: songUrl,
    });
    dispatch(setAudioTitleAndArtist({ title, artistName, song }));

    console.log("Playing Sound");
    await sound.playAsync();
    dispatch(setIsloading(false));
  };

  const playSound = async () => {
    console.log("play Sound");
    await song.playAsync();
    dispatch(setIsPlaying(true));
  };

  const stopSound = async () => {
    console.log("Pause Sound");
    await song.pauseAsync();
    dispatch(setIsPlaying(false));
  };
  // here

  useEffect(() => {
    return song
      ? () => {
          console.log("Unloading Sound");
          song.unloadAsync();
        }
      : undefined;
  }, [song]);

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

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
      {/* <SlidingUp playNewSound={playNewSound} playSound={playSound} stopSound={stopSound} /> */}
      <SlidingUp />
      <Navbar />
    </>
  );
};

export default AppWrapper;
