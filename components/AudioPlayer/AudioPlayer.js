import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioTitleAndArtist, setIsPlaying, setIsloading } from '../../redux/features/audioPlayerSlice';

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const song = useSelector((state)=>state.audioPlayer.song);

  const playNewSound = async ({ title, artistName, songUrl }) => {
    console.log("Loading Sound");
    dispatch(setIsloading(true));
    dispatch(setIsPlaying(true));
    const { sound } = await Audio.Sound.createAsync({
      uri: songUrl,
    });
    dispatch(setAudioTitleAndArtist({ title, artistName, song: sound }));

    console.log("Playing Sound");
    await sound.playAsync();
    dispatch(setIsloading(false));
  };

  const stopSound = async () => {
    console.log("Pause Sound");
    await song.pauseAsync();
    dispatch(setIsPlaying(false));
  };

  return (
    <View>
      <Button title="Play Sound" onPress={()=>playNewSound({
        songUrl: "https://firebasestorage.googleapis.com/v0/b/vocalify-d0c53.appspot.com/o/songs%2FMaher%20Zain%20-%20Samih%20_%20%D9%85%D8%A7%D9%87%D8%B1%20%D8%B2%D9%8A%D9%86%20-%20%D8%B3%D8%A7%D9%85%D8%AD%20%D8%A3%D9%86%D8%AA%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%AD.mp3?alt=media&token=908dcb4e-0115-43c2-8625-d985e52601f7",
        artistName: "loh",
        title: "lah"
      })} />
      <Button title="Pause Sound" onPress={stopSound} />
    </View>
  );
}

export default AudioPlayer;

// const styles = StyleSheet.create({ ... }); 