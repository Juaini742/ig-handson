import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function Profile() {
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("token");
    await setUser(null);
    router.replace("/(auth)/login");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Profile</Text>
        <Button onPress={handleLogout}>Logout</Button>
      </View>
    </SafeAreaView>
  );
}
