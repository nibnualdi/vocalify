import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MusicCard from "./MusicCard";

import { API_MOCK } from "../constans/API_MOCK";

const DiscoverSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.subTitle}>Quick picks</Text>
        <Text style={styles.title}>Discover</Text>
      </View>
      <ScrollView horizontal decelerationRate={0} snapToInterval={350} snapToAlignment={"center"}>
        <FlatList
          data={API_MOCK}
          renderItem={() => <MusicCard />}
          contentContainerStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          numColumns={Math.ceil(API_MOCK.length / 3)}
        />
      </ScrollView>
    </View>
  );
};

export default DiscoverSection;

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
