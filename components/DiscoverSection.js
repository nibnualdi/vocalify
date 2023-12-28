import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MusicCard from "./MusicCard";

import { API_MOCK } from "../constans/API_MOCK";
import { useGetAllSongsQuery } from "../redux/services/song";

const DiscoverSection = () => {
  const { data, error, isLoading } = useGetAllSongsQuery("");
  const songs = data?.songs;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.subTitle}>Quick picks</Text>
        <Text style={styles.title}>Discover</Text>
      </View>
      {/* <ScrollView horizontal decelerationRate={0} snapToInterval={350} snapToAlignment={"center"}> */}
      <ScrollView horizontal decelerationRate="fast">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {error ? (
              <Text>Somthing went wrong...</Text>
            ) : (
              <FlatList
                data={songs || []}
                renderItem={({ item }) => (
                  <MusicCard
                    id={item.id}
                    title={item.title}
                    artist={item.artist_name}
                    imageUrl={item.image_url}
                    songUrl={item.song_url}
                  />
                )}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={songs.length < 3 ? 1 : Math.ceil(API_MOCK.length / 3)}
              />
            )}
          </>
        )}
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
