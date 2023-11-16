import React, { useEffect, useRef } from "react";
import { View, Button, Text, Animated, Dimensions } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import PlayPauseButton from "./AudioPlayer/PlayPauseButton";
import { useSelector } from "react-redux";

const SlidingUp = () => {
  let ref = useRef();
  const animatedValue = new Animated.Value(0);
  const { height } = Dimensions.get("window");
  const title = useSelector((state)=>state.audioPlayer.title)

  useEffect(()=>{
    if(title) {
      Animated.timing(animatedValue, {
        toValue: 140,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [title])

  return (
    <SlidingUpPanel
      ref={(c) => (ref = c)}
      snappingPoints={[150]}
      animatedValue={animatedValue}
      draggableRange={{ top: height, bottom: 70 }}
      friction={0.8}
    >
      <View style={styles.container}>
      <PlayPauseButton />
        <Text>Ini pake function componnet</Text>
        <AudioPlayer />
        <Button title="Hide" onPress={() => ref.hide()} />
      </View>
    </SlidingUpPanel>
  );
};

export default SlidingUp;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
};