import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useAuth } from "../../context/useContext";

export default function MyHome() {
  const { logout, user } = useAuth();
  // console.log("jhjj", user);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Text>MyHome</Text>
      {/* <Button title="Signout" onPress={handleLogout} /> */}
      <Pressable
        className="ml-6 mt-5 h-12 w-24 bg-black rounded-full text-white justify-center items-center"
        onPress={handleLogout}
      >
        <Text className="text-white font-bold">signout</Text>
      </Pressable>
    </View>
  );
}
