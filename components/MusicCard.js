import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useDispatch } from "react-redux";
import { setAudioTitleAndArtist, setIsPlaying, setIsloading } from "../redux/features/audioPlayerSlice";
import { Audio } from "expo-av";

const MusicCard = ({ title, artist, imageUrl, songUrl }) => {
  const dispatch = useDispatch();

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

  return (
    <TouchableHighlight underlayColor={"rgba(1,1,1,.05)"} style={styles.container} onPress={()=>playNewSound({artistName: artist, songUrl, title})}>
      <>
        <Image
          source={{
            uri: imageUrl ? imageUrl : 'https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg',
            width: 70,
            height: 70,
          }}
          style={styles.image}
        />
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
  image: {
    borderRadius: 10,
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
