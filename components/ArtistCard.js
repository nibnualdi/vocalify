import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const ArtistCard = ({ id, imageUrl, artist }) => {
  return (
    <TouchableHighlight onPress={() => router.replace(`/artists/${artist}`)}>
      <>
        <Image
          source={{
            uri: imageUrl
              ? imageUrl
              : "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg",
            width: 100,
            height: 100,
          }}
        />
        <Text style={styles.artistName}>{artist}</Text>
      </>
    </TouchableHighlight>
  );
};

export default ArtistCard;

export const styles = StyleSheet.create({
  artistName: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
});
