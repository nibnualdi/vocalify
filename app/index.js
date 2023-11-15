import { ScrollView, StyleSheet, View } from "react-native";
import { DiscoverSection, ArtistsSection } from "../components";

import storage from "@react-native-firebase/storage";
import * as DocumentPicker from "expo-document-picker";

export default function Page(props) {
  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    const { assets, canceled } = result;

    if (!assets) return;
    const reference = storage().ref(`/songs/${assets[0].name}`);
    await reference.putFile(assets[0].uri);
    console.log(assets[0]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <DiscoverSection />
        <ArtistsSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingBottom: 80,
  },
});
