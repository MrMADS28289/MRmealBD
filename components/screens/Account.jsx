import { View, Text } from "react-native";
import React from "react";

export default function Account() {
  return (
    <View>
      <Text>{process.env.EXPO_PUBLIC_GOOGLE_API_KEY}</Text>
    </View>
  );
}
