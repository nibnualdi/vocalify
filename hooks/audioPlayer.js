import { Audio } from 'expo-av';
import { setAudio, setIsPlaying, setIsloading, setTitleAndArtist } from '../redux/features/audioPlayerSlice';
import { useDispatch, useSelector } from 'react-redux';

const useAudioPlayer = () => {
  const dispatch = useDispatch();
  const song = useSelector((state)=>state.audioPlayer.song);
  const selectedId = useSelector((state) => state.audioPlayer.id);

  const playNewSound = async ({ id, title, artistName, songUrl }) => {
    if(id === selectedId) return
    
    console.log("Loading Sound");
    dispatch(setIsloading(true));
    dispatch(setIsPlaying(true));
    dispatch(setTitleAndArtist({ id, title, artistName }));
    const { sound } = await Audio.Sound.createAsync({
      uri: songUrl,
    });
    dispatch(setAudio({ song: sound }));

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

  return { playNewSound, playSound, stopSound }
}

export {
  useAudioPlayer
}