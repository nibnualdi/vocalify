import React, { useRef } from "react";
import { View, Button, Text, Animated, Dimensions } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import AudioPlayer from "./AudioPlayer";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
};

const SlidingUp = () => {
  let ref = useRef();
  const animatedValue = new Animated.Value(140);
  const { height } = Dimensions.get("window");

  return (
    <SlidingUpPanel
      ref={(c) => (ref = c)}
      snappingPoints={[150]}
      animatedValue={animatedValue}
      draggableRange={{ top: height, bottom: 140 }}
      friction={0.8}
    >
      <View style={styles.container}>
        <Text>Ini pake function componnet</Text>
        <Button title="Hide" onPress={() => ref.hide()} />
        <AudioPlayer
          track={[
            {
              id: "1",
              url: "https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3",
              title: "Keys of moon",
              artist: "The Epic Hero",
              artwork: "https://picsum.photos/id/1003/200/300",
              album: "",
              duration: 149,
            },
          ]}
        />
      </View>
    </SlidingUpPanel>
  );
};

export default SlidingUp;
