import { Dimensions, StyleSheet } from "react-native";

export const BaseStyle = {
  paddingHorizontal: 10,
  primaryColor: "#1DA1F2",
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
  baseInput: {
    color: "white",
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#3C5162",
    padding: 10,
    borderRadius: 10,
  },
});
