import { View, Text, Button } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

export default function WishList() {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex-1 dark:bg-neutral-900">
      <Text className={colorScheme == "light" ? "text-black" : "text-white"}>
        WishLists
      </Text>
    </View>
  );
}
