import { View, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

const HomeHeader = () => {
  const openModal = () => {
    // bottomSheetRef.current?.present();
    console.log("openModal");
  };

  return (
    <SafeAreaView className="flex-1 bg-yellow-400 pt-[60px]">
      {/* <BottomSheet ref={bottomSheetRef} /> */}

      <View className="bg-yellow-400 h-[50px]">
        <View className="flex-row justify-between px-4 items-center">
          <View className="flex-row items-center bg-yellow-300 border-2 border-white h-[40px] w-[250px] rounded-full px-3">
            <Ionicons name="search" size={20} color="white" />
            <TextInput
              placeholderTextColor="#fff"
              className="p-2"
              placeholder="Searce your dishes"
            />
          </View>
          <Link href={"/(modal)/filter"} asChild>
            <TouchableOpacity>
              <Ionicons name="options-outline" size={24} color={Colors.white} />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
