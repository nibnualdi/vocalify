import React, { useEffect, useRef } from "react";
import { View, Button, Text, Animated, Dimensions, Image, StyleSheet } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import PlayPauseButton from "./AudioPlayer/PlayPauseButton";
import { useSelector } from "react-redux";
import NextButton from "./AudioPlayer/NextButton";

const SlidingUp = () => {
  let ref = useRef();
  const animatedValue = new Animated.Value(0);
  const { height } = Dimensions.get("window");
  const imageUrl = useSelector((state) => state.audioPlayer.imageUrl);
  const title = useSelector((state) => state.audioPlayer.title);
  const artistName = useSelector((state) => state.audioPlayer.artistName);

  // not prioritize
  // open the sliding up smoothly
  // useEffect(()=>{
  //   if(title) {
  //     Animated.timing(animatedValue, {
  //       toValue: 140,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  //   console.log("title: ", title)
  // }, [title])

  if(!imageUrl) return

  return (
    <SlidingUpPanel
      ref={(c) => (ref = c)}
      snappingPoints={[140]}
      animatedValue={animatedValue}
      draggableRange={{ top: height, bottom: 140 }}
      friction={0.8}
    >
      <View style={styles.container}>
        <Image source={{
          uri: imageUrl
        }} style={styles.image} width={50} height={50} />

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.subTitle} numberOfLines={1}>{artistName}</Text>
        </View>

        <View style={styles.containerPlayPauseButton}>
          <PlayPauseButton />
        </View>
        {/* <NextButton />
        <Button title="Hide" onPress={() => ref.hide()} /> */}
      </View>
    </SlidingUpPanel>
  );
};

export default SlidingUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10
  },
  image: {
    flex: 1,
  },
  textContainer: {
    flex: 4,
    padding: 10,
    height: 50,
  },
  title: {
    width: 100
  },
  subTitle: {
    width: 100
  },
  containerPlayPauseButton: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
})
