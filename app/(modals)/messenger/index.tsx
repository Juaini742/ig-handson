import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Link, useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function MessengerModal() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    console.log("Clicked");
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Zhidani",
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "black" },
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleGoBack}
          style={{
            marginLeft: 5,
            padding: 5,
            borderRadius: 100,
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>MessengerModal</Text>
    </View>
  );
}
