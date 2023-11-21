import { useState } from "react";
import {
  Animated,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useGetASongByIdQuery, useGetAllSongsExceptSelectedOneQuery } from "../redux/services/song";
import { useSelector } from "react-redux";
import MusicCard from "./MusicCard";

const LyricRoute = () => {
  const id = useSelector((state) => state.audioPlayer.id);
  const { data } = useGetASongByIdQuery(id);
  const lyric = data?.songs[0]?.lyric ? data?.songs[0]?.lyric : "Lyric is not available for now";

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 15, backgroundColor: "white" }}>
      <Text style={{ fontSize: 25 }}>{lyric}</Text>
    </View>
  );
};

const SongsRoute = () => {
  const id = useSelector((state) => state.audioPlayer.id);
  const { data } = useGetAllSongsExceptSelectedOneQuery(id);
  const { data: curentlyPlaying } = useGetASongByIdQuery(id);
  const nextSongs = data?.songs;

  return (
    <View style={{ flex: 1, padding: 15, gap: 10, backgroundColor: "white" }}>
      {/* curently playing */}
      <MusicCard
        id={curentlyPlaying?.songs[0]?.id}
        title={curentlyPlaying?.songs[0]?.title}
        artist={curentlyPlaying?.songs[0]?.artist_name}
        imageUrl={curentlyPlaying?.songs[0]?.image_url}
        songUrl={curentlyPlaying?.songs[0]?.song_url}
      />
      {/* curently playing */}

      {/* next songs */}
      <FlatList
        data={nextSongs}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <MusicCard
            id={item.id}
            title={item.title}
            artist={item.artist_name}
            imageUrl={item.image_url}
            songUrl={item.song_url}
          />
        )}
      />
      {/* next songs */}
    </View>
  );
};

const renderScene = SceneMap({
  first: LyricRoute,
  second: SongsRoute,
});

export default function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Lyric" },
    { key: "second", title: "Next" },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={{ flexDirection: "row", backgroundColor: "white" }}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 0.5)),
          });

          return (
            <TouchableOpacity
              key={`${route} ${i}`}
              style={{ flex: 1, alignItems: "center", padding: 16 }}
              onPress={() => setIndex(i)}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}
