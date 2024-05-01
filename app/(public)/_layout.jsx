import React from "react";
import { Stack } from "expo-router";

export default function Publiclayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="reset" options={{ headerShown: false }} />
    </Stack>
  );
}
