import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { DiscoverSection, MusicCard } from "../../components";
import { useGetAllSongsByArtistNameQuery, useGetAllSongsQuery } from "../../redux/services/song";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";

const Artist = () => {
  const { artist } = useLocalSearchParams();
  const { data, isError, isLoading } = useGetAllSongsByArtistNameQuery(artist);
  const songs = data?.songs;
  
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.subTitle}>Find songs</Text>
          <Text style={styles.title}>{artist}</Text>
        </View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {isError ? (
              <Text>Somthing went wrong...</Text>
            ) : (
              <FlatList
                data={songs}
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
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default Artist;

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
