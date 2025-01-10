import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ui/Button";
import { BaseStyle, BaseStyleSheet } from "@/constants/BaseStyle";
import { useRouter } from "expo-router";
import { useUser } from "@/hooks/useUser";

export default function LoginForm() {
  const router = useRouter();
  const { handleInputChange, onSubmit, isPending, isLoading } = useUser();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#1A2F40", "#1E3837", "#2E3339"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white" }}>English (US)</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/instagram-logo.png")}
            style={{ width: 60, height: 60 }}
          />
          <View style={{ marginTop: 40, gap: 15 }}>
            <TextInput
              keyboardType="email-address"
              placeholder="Phone number, username, or email"
              placeholderTextColor="#818F9A"
              onChange={(e) => handleInputChange("email", e.nativeEvent.text)}
              style={[
                BaseStyleSheet.baseInput,
                { width: Dimensions.get("screen").width - 10 },
              ]}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#818F9A"
              secureTextEntry={true}
              onChange={(e) =>
                handleInputChange("password", e.nativeEvent.text)
              }
              style={[
                BaseStyleSheet.baseInput,
                {
                  height: 50,
                  width: Dimensions.get("screen").width - 10,
                },
              ]}
            />
            <Button disabled={isPending || isLoading} onPress={onSubmit}>
              {isPending || isLoading ? "Loading..." : "Log in"}
            </Button>
            <TouchableOpacity>
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 16 }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <Button
            type="outline"
            style={{ width: "100%" }}
            textStyle={{ color: BaseStyle.primaryColor }}
            onPress={() => router.push("/(auth)/register")}
          >
            Create new account
          </Button>
          <Text
            style={{ color: "white", textAlign: "center", marginVertical: 10 }}
          >
            Meta
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
