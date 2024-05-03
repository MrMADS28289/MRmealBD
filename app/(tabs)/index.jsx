import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import MainBottomTabBar from "../../components/BottomTabBar";

export default function HomeSreen() {
  return (
    <BottomSheetModalProvider>
      <View className="flex-1">
        <MainBottomTabBar />
      </View>
    </BottomSheetModalProvider>
  );
}
