import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import ArtistCard from "./ArtistCard";

import { useGetAllArtistsQuery } from "../redux/services/song";

const ArtistsSection = () => {
  const { data, isLoading, isError } = useGetAllArtistsQuery();
  const artists = data?.artists;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Artists</Text>
      </View>
      <ScrollView horizontal>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {isError ? (
              <Text>Somthing went wrong...</Text>
            ) : (
              <FlatList
                data={artists}
                renderItem={({ item }) => (
                  <ArtistCard id={item.id} imageUrl={item.image_url} artis={item.name} />
                )}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={Math.ceil(artists?.length < 3 ? 3 : artists?.length / 2)}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ gap: 5 }}
              />
            )}
          </>
        )}
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
