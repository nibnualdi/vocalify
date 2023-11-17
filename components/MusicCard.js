import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import PlayPauseButton from "./AudioPlayer/PlayPauseButton";
import { useAudioPlayer } from "../hooks/audioPlayer";

const MusicCard = ({ id, title, artist, imageUrl, songUrl }) => {
  const selectedId = useSelector((state) => state.audioPlayer.id);
  const { playNewSound } = useAudioPlayer();

  return (
    <TouchableHighlight
      underlayColor={"rgba(1,1,1,.05)"}
      style={styles.container}
      onPress={() => playNewSound({ id, artistName: artist, songUrl, title, imageUrl })}
    >
      <>
        <View style={styles.imageContainer}>
          {selectedId === id && (
            <View style={styles.playPauseButton}>
              <PlayPauseButton />
            </View>
          )}

          <Image
            source={{
              uri: imageUrl
                ? imageUrl
                : "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg",
              width: 70,
              height: 70,
            }}
            style={styles.image}
          />
        </View>

        <View>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {artist}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  container: {
    width: 340,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    borderRadius: 10,
  },
  playPauseButton: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: .5
  },
  title: {
    fontFamily: "Inter-Regular",
    fontSize: 20,
    width: 200,
  },
  subTitle: {
    fontFamily: "Inter-Light",
    fontSize: 12,
    width: 200,
  },
});
