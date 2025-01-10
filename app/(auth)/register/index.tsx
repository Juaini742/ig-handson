import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import RegisterForm from "@/components/register/form";

export default function RegisterScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return <RegisterForm />;
}
