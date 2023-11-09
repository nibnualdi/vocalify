import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const MENUS = [
  {
    name: "Home",
    Component: Entypo,
    nameOfIcon: "home",
    to: "/"
  },
  {
    name: "Discover",
    Component: MaterialCommunityIcons,
    nameOfIcon: "animation-play",
    to: "/discover"
  },
  {
    name: "Artists",
    Component: Ionicons,
    nameOfIcon: "musical-notes-sharp",
    to: "/artists"
  },
];
