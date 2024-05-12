import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import MainBottomTabBar from "../../components/BottomTabBar";
import { useColorScheme } from "nativewind";

export default function HomeSreen() {
  const { colorScheme } = useColorScheme();
  return (
    <BottomSheetModalProvider>
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View className="flex-1">
        <MainBottomTabBar />
      </View>
    </BottomSheetModalProvider>
  );
}
