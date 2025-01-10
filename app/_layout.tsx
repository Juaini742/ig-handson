import { UserProvider, useUser } from "@/hooks/useUser";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";

const modals = ["(modals)/notification", "(modals)/messenger"];

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <RootNavItem />
    </UserProvider>
  );
}

const RootNavItem = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user?.token === null) {
      router.replace("/(auth)/login");
    }
  }, []);

  return (
    <React.Fragment>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        {modals.map((modal) => (
          <Stack.Screen
            key={modal}
            name={modal}
            options={{
              presentation: "modal",
            }}
          />
        ))}

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar backgroundColor="black" />
    </React.Fragment>
  );
};
