import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BaseStyleSheet } from "@/constants/BaseStyle";

export default function ProfileHomeSection() {
  return (
    <TouchableOpacity
      style={[
        BaseStyleSheet.flexAlignRowCenter,
        {
          zIndex: 999,
          gap: 10,
          marginTop: 10,
        },
      ]}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "white",
          borderRadius: 100,
          overflow: "hidden",
          padding: 1,
        }}
      >
        <Image
          source={require("@/assets/images/people.png")}
          style={BaseStyleSheet.heightAndWidth100}
        />
      </View>
      <View style={{ gap: 4 }}>
        <Text style={{ color: "white" }}>johnDoe</Text>
        <Text style={{ color: "white", fontSize: 12 }}>
          Lorem ipsum dolor sit amet consectetur elit.
        </Text>
      </View>
    </TouchableOpacity>
  );
}
