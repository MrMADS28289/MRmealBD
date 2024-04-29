import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInScreen from "../../components/SignInScreen";
import SignOutScreen from "../../components/SignOutScreen";

export default function index() {
  return (
    <ClerkProvider publishableKey="pk_test_Y2xlYW4tZnJvZy05NS5jbGVyay5hY2NvdW50cy5kZXYk">
      <SafeAreaView className="flex-1">
        <SignedIn>
          <SignInScreen />
        </SignedIn>
        <SignedOut>
          <SignOutScreen />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
