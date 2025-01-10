import { StyleSheet } from "react-native";

export const BaseStyle = {
  paddingHorizontal: 10,
};

export const BaseStyleSheet = StyleSheet.create({
  flexAlignRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  heightAndWidth100: {
    height: "100%",
    width: "100%",
  },
});
