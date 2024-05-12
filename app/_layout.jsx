import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthContextProvider, useAuth } from "../context/useContext";

const InitialLayout = () => {
  // fireBase Auth

  const { isAuthenticated, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // if (loading) return;
    if (typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(tabs)";
    if (isAuthenticated && !inApp) {
      // console.log("loadingp", loading);
      router.push("(tabs)");
    } else if (!isAuthenticated) {
      // console.log("loadingl", loading);
      router.replace("/login");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayoutNav = () => {
  return (
    <AuthContextProvider>
      <InitialLayout />
    </AuthContextProvider>
  );
};

export default RootLayoutNav;
