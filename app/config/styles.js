import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.white,
    fontSize: 15.5,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
