import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { stories } from "@/assets/data/content";
import { BaseStyleSheet } from "@/constants/BaseStyle";
import { Link } from "expo-router";
import Avatar from "../Avatar";

export default function HeaderSection() {
  return (
    <View>
      <View
        style={[
          BaseStyleSheet.flexAlignRowCenter,
          {
            justifyContent: "space-between",
            padding: 10,
          },
        ]}
      >
        <Image
          source={require("@/assets/images/instagram.png")}
          style={{ width: 120, height: 50, tintColor: "white" }}
        />
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Link href={"/(modals)/notification"}>
            <AntDesign name="hearto" size={22} color="white" />
          </Link>
          <Link href={"/(modals)/messenger"}>
            <View style={{ position: "relative" }}>
              <Image
                source={require("@/assets/images/messenger.png")}
                style={{ width: 22, height: 22, tintColor: "white" }}
              />
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  right: -7,
                  width: 15,
                  height: 15,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red",
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "white", fontWeight: "bold" }}
                >
                  2
                </Text>
              </View>
            </View>
          </Link>
        </View>
      </View>

      <View>
        <FlatList
          data={stories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", position: "relative" }}>
              {item.type === "MINE" && (
                <View
                  style={{
                    position: "absolute",
                    width: 35,
                    height: 35,
                    bottom: 20,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: "#5cb0ff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    borderWidth: 3,
                    borderColor: "black",
                  }}
                >
                  <Text style={{ fontSize: 23, color: "white" }}>+</Text>
                </View>
              )}
              <Avatar image={item.image} size={90} />
              <Text style={{ color: "white", fontSize: 12 }}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
