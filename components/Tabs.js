import { useState } from "react";
import {
  Animated,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useGetASongByIdQuery } from "../redux/services/song";
import { useSelector } from "react-redux";

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

const SongsRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />;

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
