import React from "react";
import { Stack } from "expo-router";
import MainHeader from "../../components/MainHeader";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <MainHeader />,
        }}
      />
    </Stack>
  );
}
