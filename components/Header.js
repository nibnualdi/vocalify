import { Animated, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const route = usePathname();

  useEffect(() => {
    if (route === "/search") return;
    if (isSearching || showInput) {
      setIsSearching(false);
      setShowInput(false);
      return;
    }
  }, [route]);

  const handleButtonSearch = () => {
    router.replace("/search");
    setIsSearching(true);
    setTimeout(() => setShowInput(true), 100);
  };

  useEffect(() => {
    if (isSearching) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
      return;
    }

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isSearching]);

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.logo}>Vocalify</Text>

      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <AntDesign name="search1" size={24} color="black" onPress={handleButtonSearch} />
      </Animated.View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 25,
    fontFamily: "Inter-Bold",
  },
  input: {
    position: "absolute",
    top: 0,
    right: 0,

    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
