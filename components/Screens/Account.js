import { View, Text } from "react-native";
import React from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function Account() {
  const router = useRouter();
  const { userId } = useAuth();

  useFocusEffect(() => {
    if (!userId) {
      router.replace("/login");
    }
  });

  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
}
