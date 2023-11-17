import React, { useEffect, useRef } from "react";
import { View, Button, Text, Animated, Dimensions, Image, StyleSheet } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import PlayPauseButton from "./AudioPlayer/PlayPauseButton";
import { useSelector } from "react-redux";
import NextButton from "./AudioPlayer/NextButton";

const SlidingUp = () => {
  let ref = useRef();
  let ref2 = useRef();
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
  
  // solution 2 but the behavior of the velocity is strange
  // and the user still can drop all the way down the sliding
  // useEffect(()=>{
  //   if(title) {
  //     ref.show(140, 1000)
  //   }
  //   console.log("title: ", title)
  // }, [title])

  if (!imageUrl) return;

  return (
    <SlidingUpPanel
      ref={(c) => (ref = c)}
      snappingPoints={[140]}
      animatedValue={animatedValue}
      draggableRange={{ top: height, bottom: 140 }}
      friction={1}
      backdropOpacity={0}
    >
      <>
        <View style={styles.container}>
          <Image
            source={{
              uri: imageUrl ? imageUrl : "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg",
            }}
            style={styles.image}
            width={50}
            height={50}
          />

          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {artistName}
            </Text>
          </View>

          <View style={styles.containerPlayPauseButton}>
            <PlayPauseButton />
          </View>
          {/* <NextButton />
        <Button title="Hide" onPress={() => ref.hide()} /> */}
        </View>

        <SlidingUpPanel
          ref={(c) => (ref2 = c)}
          snappingPoints={[140]}
          animatedValue={animatedValue}
          draggableRange={{ top: height - 95, bottom: 140 }}
          friction={0.8}
          backdropOpacity={0}
        >
          <Text style={{width: "100%", height: "100%", backgroundColor: "green"}}>Here is the lyric and next songs tabs</Text>
        </SlidingUpPanel>
      </>
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
    padding: 10,
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
    width: 100,
  },
  subTitle: {
    width: 100,
  },
  containerPlayPauseButton: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
