import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BaseStyleSheet } from "@/constants/BaseStyle";
import { Image } from "react-native";

export default function Avatar({
  image,
  size,
  paddingSize,
}: {
  image: any;
  size: number;
  paddingSize?: number;
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        width: size,
        height: size,
        borderRadius: "100%",
        overflow: "hidden",
        marginHorizontal: 5,
        marginBottom: 5,
      }}
    >
      <LinearGradient
        colors={["#ffca5f", "#c6092f"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={[
          BaseStyleSheet.heightAndWidth100,
          {
            justifyContent: "center",
            alignItems: "center",
            padding: paddingSize ?? 3,
            marginBottom: 5,
          },
        ]}
      >
        <View
          style={[
            BaseStyleSheet.heightAndWidth100,
            {
              backgroundColor: "black",
              borderRadius: "100%",
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: paddingSize ?? 3,
            },
          ]}
        >
          <View
            style={[
              BaseStyleSheet.heightAndWidth100,
              {
                borderRadius: 100,
                overflow: "hidden",
              },
            ]}
          >
            <Image source={image} style={BaseStyleSheet.heightAndWidth100} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
