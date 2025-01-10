import { View, Text, Platform, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const screens = [
  {
    name: "index",
    icon: require("@/assets/images/home.png"),
  },
  {
    name: "explore/index",
    icon: require("@/assets/images/search.png"),
  },
  {
    name: "new-post/index",
    icon: require("@/assets/images/more.png"),
  },
  {
    name: "reels/index",
    icon: require("@/assets/images/video.png"),
  },
  {
    name: "profile/index",
    icon: require("@/assets/images/user.png"),
  },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          android: {
            position: "absolute",
            height: 50,
            borderTopWidth: 0,
            paddingTop: 5,
            backgroundColor: "#1a1c2e",
          },
          ios: {
            position: "absolute",
            height: 50,
            borderTopWidth: 0,
            paddingTop: 5,
            backgroundColor: "black",
          },
          default: {
            backgroundColor: "black",
          },
        }),
      }}
    >
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={screen.icon}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "white" : "gray",
                  }}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
