import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const MusicCard = () => {
  return (
    <View style={styles.container}>
      <>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/id/b/ba/830records032.jpg",
            width: 70,
            height: 70,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>Music title</Text>
          <Text style={styles.subTitle}>Music artist</Text>
        </View>
      </>
    </View>
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
  },
  subTitle: {
    fontFamily: "Inter-Light",
    fontSize: 12,
  },
});
