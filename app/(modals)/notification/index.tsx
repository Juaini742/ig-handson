import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Link, useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { notifications } from "@/assets/data/content";
import Avatar from "@/components/Avatar";
import { BaseStyleSheet } from "@/constants/BaseStyle";
import Button from "@/components/ui/Button";

export default function NotificationModal() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    console.log("Clicked");
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Notifications",
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
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingRight: 10,
        paddingLeft: 9,
      }}
    >
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Text style={{ color: "white", marginVertical: 10 }}>3 Days ago</Text>
        }
        renderItem={({ item }) => (
          <View
            style={[
              BaseStyleSheet.flexAlignRowCenter,
              {
                marginVertical: 5,
                justifyContent: "space-between",
              },
            ]}
          >
            <View
              style={[BaseStyleSheet.flexAlignRowCenter, { marginVertical: 8 }]}
            >
              <View>
                <Avatar paddingSize={1.5} image={item.image} size={50} />
              </View>
              <View>
                <Text style={{ color: "white" }}>{item.username}</Text>
                <Text style={{ color: "white" }}>{item.message}</Text>
              </View>
            </View>
            {!item.isFollowing && <Button vertical={5}>Follow</Button>}
          </View>
        )}
      />
    </View>
  );
}
