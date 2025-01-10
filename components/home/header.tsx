import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { stories } from "@/assets/data/content";
import { LinearGradient } from "expo-linear-gradient";
import { BaseStyleSheet } from "@/constants/BaseStyle";

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
          <TouchableOpacity>
            <AntDesign name="hearto" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: "relative" }}>
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
          </TouchableOpacity>
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
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  width: 90,
                  height: 90,
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
                      padding: 3,
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
                        padding: 5,
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
                      <Image
                        source={item.image}
                        style={BaseStyleSheet.heightAndWidth100}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: 12 }}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
