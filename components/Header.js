import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.logo}>Vocalify</Text>
      <AntDesign name="search1" size={24} color="black" />
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
});
