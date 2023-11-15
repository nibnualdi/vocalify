import { FontAwesome, Foundation } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../redux/features/audioPlayerSlice";


const PlayPauseButton = () => {
  const dispatch = useDispatch();
  const song = useSelector((state)=>state.audioPlayer.song);
  const isLoading = useSelector((state) => state.audioPlayer.isLoading);
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);

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

  if (isLoading) return <ActivityIndicator size={24} color="black" />
  if (isPlaying) return <Foundation name="pause" size={24} color="black" onPress={stopSound} />;
  return <FontAwesome name="play" size={24} color="black" onPress={playSound} />;
};

export default PlayPauseButton;
