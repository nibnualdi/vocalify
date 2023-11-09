import { Image, StyleSheet, Text, View } from "react-native";

const ArtistCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/id/b/ba/830records032.jpg",
          width: 100,
          height: 100,
        }}
      />
      <Text style={styles.artistName}>Artist name</Text>
    </View>
  );
};

export default ArtistCard;


export const styles = StyleSheet.create({
  artistName: {
    fontFamily: "Inter-Regular",
    fontSize: 14
  }
});