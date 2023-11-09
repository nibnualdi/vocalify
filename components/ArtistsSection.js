import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import ArtistCard from "./ArtistCard";

import { API_MOCK } from "../constans/API_MOCK";

const ArtistsSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Artists</Text>
      </View>
      <ScrollView horizontal>
        <FlatList
          data={API_MOCK}
          renderItem={() => <ArtistCard />}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          numColumns={Math.ceil(API_MOCK.length / 2)}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 5 }}
        />
      </ScrollView>
    </View>
  );
};

export default ArtistsSection;

const styles = StyleSheet.create({
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
