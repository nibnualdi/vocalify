import React, { useRef } from "react";
import { View, Button, Text, Animated, Dimensions } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";

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
      </View>
    </SlidingUpPanel>
  );
};

export default SlidingUp;
