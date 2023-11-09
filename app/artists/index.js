import { FlatList, StyleSheet, Text, View } from "react-native";
import { ArtistCard, ArtistsSection } from "../../components";
import { API_MOCK } from "../../constans/API_MOCK";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Artists</Text>
        </View>
        <FlatList
          data={API_MOCK}
          renderItem={() => <ArtistCard />}
          horizontal={false}
          numColumns={3}
          columnWrapperStyle={{ paddingRight: 24, justifyContent: "space-around" }}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingBottom: 130,
  },
  sectionContainer: {
    marginTop: 24,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
  },
  subTitle: {
    fontFamily: "Inter-Light",
    fontSize: 13,
  },
});
