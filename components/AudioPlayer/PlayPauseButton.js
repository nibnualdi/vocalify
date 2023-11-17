import { FontAwesome, Foundation } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../redux/features/audioPlayerSlice";
import { useAudioPlayer } from "../../hooks/audioPlayer";


const PlayPauseButton = () => {
  const dispatch = useDispatch();
  const song = useSelector((state)=>state.audioPlayer.song);
  const isLoading = useSelector((state) => state.audioPlayer.isLoading);
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);
  const { playSound, stopSound } = useAudioPlayer();

  if (isLoading) return <ActivityIndicator size={24} color="black" />
  if (isPlaying) return <Foundation name="pause" size={24} color="black" onPress={stopSound} />;
  return <FontAwesome name="play" size={24} color="black" onPress={playSound} />;
};

export default PlayPauseButton;
