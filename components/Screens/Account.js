import { View, Text } from "react-native";
import React from "react";
import { Redirect, useFocusEffect, useRouter } from "expo-router";

export default function Account() {
  const router = useRouter();

  const n = true;
  // if (!n) {
  //   <Redirect href="/home" />;
  // }

  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    if (!n) {
      router.replace("/home");
    }
  });

  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
}
