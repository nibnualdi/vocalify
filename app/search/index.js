import { Animated, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { ArtistCard, DiscoverSection, MusicCard } from "../../components";
import {
  useLazySearchArtistsByNameQuery,
  useLazySearchSongsByTitleQuery,
} from "../../redux/services/song";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../../redux/features/audioPlayerSlice";
import { useEffect } from "react";
import useDebouncer from "../../hooks/debouncer";

const Artist = () => {
  const searchInput = useSelector((state) => state.audioPlayer.searchInput);
  const [searchArtist, { data, isLoading, error }] = useLazySearchArtistsByNameQuery();
  const debounced = useDebouncer(searchInput);
  const artists = data?.artists;

  useEffect(() => {
    if (!debounced) return;
    searchArtist(debounced);
  }, [debounced]);

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.subTitle}>Artists</Text>
      </View>
      <FlatList
        data={artists}
        renderItem={({ item }) => (
          <ArtistCard id={item.id} imageUrl={item.image_url} artist={item.name} />
        )}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{ paddingRight: 24 }}
      />
    </View>
  );
};

const Songs = () => {
  const searchInput = useSelector((state) => state.audioPlayer.searchInput);
  const [searchSong, { data, isLoading, error }] = useLazySearchSongsByTitleQuery();
  const debounced = useDebouncer(searchInput);
  const songs = data?.songs;

  useEffect(() => {
    if (!debounced) return;
    searchSong(debounced);
  }, [debounced]);

  return (
    <View style={styles.sectionContainer}>
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
    </View>
  );
};

const SearchPage = () => {
  const searchInput = useSelector((state) => state.audioPlayer.searchInput);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Search songs or artist</Text>
      <View style={styles.searchContainer}>
        <Animated.View>
          <TextInput
            style={styles.input}
            onChangeText={(e) => dispatch(setSearchInput(e))}
            value={searchInput}
            autoFocus={true}
            placeholder="search"
          />
        </Animated.View>
        <Songs />
        <Artist />
      </View>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 150,
  },
  sectionContainer: {
    marginTop: 24,
  },
  headerContainer: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
  },
  subTitle: {
    fontFamily: "Inter-Light",
    fontSize: 13,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});
