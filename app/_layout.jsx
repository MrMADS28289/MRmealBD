import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const InitialLayout = () => {
  // const { isLoaded, isSignedIn } = useAuth();
  // const segments = useSegments();
  // const router = useRouter();

  // useEffect(() => {
  //   console.log("isSignedIn", isSignedIn);
  //   if (!isLoaded) return;

  //   const isTabsGroup = segments[0] === "(auth)";

  //   if (isSignedIn && !isTabsGroup) {
  //     router.replace("/home");
  //   } else if (!isSignedIn) {
  //     router.replace("/login");
  //   }
  // }, [isSignedIn]);

  return <Slot />;
};

const RootLayoutNav = () => {
  return <InitialLayout />;
};

export default RootLayoutNav;
