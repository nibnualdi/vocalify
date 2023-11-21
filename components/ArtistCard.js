import { Image, StyleSheet, Text, View } from "react-native";

const ArtistCard = ({ id, imageUrl, artist }) => {
  return (
    <View>
      <Image
        source={{
          uri: imageUrl ? imageUrl : "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg",
          width: 100,
          height: 100,
        }}
      />
      <Text style={styles.artistName}>{artist}</Text>
    </View>
  );
};

export default ArtistCard;

export const styles = StyleSheet.create({
  artistName: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
});
