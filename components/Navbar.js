import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MENUS } from "../constans/MENUS";
import { router } from "expo-router";

const Navbar = () => {
  return (
    <View style={styles.containerNavbar}>
      {MENUS.map(({ name, Component, nameOfIcon, to }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => router.replace(to)}
          style={styles.button}
          key={name}
        >
          <>
            <Component name={nameOfIcon} size={30} color="black" />
            <Text>{name}</Text>
          </>
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  containerNavbar: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  button: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#DDDDDD",
  },
});
