import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import LoginForm from "@/components/login/form";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return <LoginForm />;
}
