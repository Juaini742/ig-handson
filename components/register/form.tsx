import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useTransition } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ui/Button";
import { BaseStyle, BaseStyleSheet } from "@/constants/BaseStyle";
import { useRouter } from "expo-router";
import { axiosInstance } from "@/lib/axios.instance";

export default function RegisterForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmit = async () => {
    if (
      !formData.username ||
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      console.log("Invalid form data");
      return;
    }
    startTransition(() => {
      axiosInstance
        .post("/auth/register", {
          firstName: "instagram challenge",
          email: formData.username,
          password: formData.password,
        })
        .then(() => {
          setFormData({
            username: "",
            password: "",
            confirmPassword: "",
          });
          router.push("/login");
        })
        .catch((err) => {
          console.error(err.response?.data || err.message);
        });
    });
  };

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
              onChange={(e) =>
                handleInputChange("username", e.nativeEvent.text)
              }
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
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="#818F9A"
              secureTextEntry={true}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.nativeEvent.text)
              }
              style={[
                BaseStyleSheet.baseInput,
                {
                  height: 50,
                  width: Dimensions.get("screen").width - 10,
                },
              ]}
            />
            <Button disabled={isPending} onPress={onSubmit}>
              {isPending ? "Loading..." : "Register"}
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
            onPress={() => router.replace("/(auth)/login")}
          >
            Already have an account?
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
