import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import ProfileHomeSection from "./profile-home";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { BaseStyle, BaseStyleSheet } from "@/constants/BaseStyle";

export default function ReelsListSection() {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={Array.from({ length: 10 })}
        renderItem={() => (
          <View
            style={{
              height: 550,
              marginVertical: 10,
              position: "relative",
              gap: 10,
            }}
          >
            <View
              style={[
                BaseStyleSheet.flexAlignRowCenter,
                {
                  justifyContent: "space-between",
                  paddingHorizontal: BaseStyle.paddingHorizontal,
                },
              ]}
            >
              <ProfileHomeSection />
              <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={15} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{ height: 420 }}>
              <Image
                source={require("@/assets/images/content.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>

            {/* footer */}
            <View style={{ paddingHorizontal: 10, gap: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={[BaseStyleSheet.flexAlignRowCenter, { gap: 10 }]}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="white" />
                    <Text style={{ fontSize: 12, color: "white" }}>1.230</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="chatbubble-outline"
                      size={24}
                      color="white"
                    />
                    <Text style={{ fontSize: 12, color: "white" }}>22</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <Feather name="send" size={24} color="white" />
                    <Text style={{ fontSize: 12, color: "white" }}>12</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Feather name="bookmark" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "green",
                    borderRadius: "100%",
                  }}
                ></View>
                <Text style={{ fontSize: 12, color: "white" }}>
                  Liked by Zhidani
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <Text style={{ color: "white" }}>ReelsListSection</Text>
    </View>
  );
}
