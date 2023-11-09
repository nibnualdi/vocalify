import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { DiscoverSection, MusicCard } from "../../components";
import { API_MOCK } from "../../constans/API_MOCK";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.subTitle}>Quick picks</Text>
          <Text style={styles.title}>Discover</Text>
        </View>
        <FlatList
          data={API_MOCK}
          renderItem={() => <MusicCard />}
          contentContainerStyle={{ gap: 10 }}
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
    paddingBottom: 150,
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
