import HeaderSection from "@/components/home/header";
import ReelsListSection from "@/components/home/reels-list";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <HeaderSection />
        <ReelsListSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
