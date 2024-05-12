import { View, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

const HomeHeader = () => {
  // const openModal = () => {
  //   // bottomSheetRef.current?.present();
  //   console.log("openModal");
  // };

  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.white }}
      className="flex-1 pt-[70px]"
    >
      {/* <BottomSheet ref={bottomSheetRef} /> */}

      <View style={{ backgroundColor: Colors.white }} className="h-[50px]">
        <View className="flex-row justify-between px-4 items-center">
          <View className="flex-row items-center bg-slate-100 border-2 border-gray-300 h-[40px] w-[250px] rounded-full px-3">
            <Ionicons name="search" size={20} color="black" />
            <TextInput
              placeholderTextColor="black"
              className="p-2 text-black"
              placeholder="Searce your dishes"
            />
          </View>
          <Link href={"/(modal)/settings"} asChild>
            <TouchableOpacity>
              <Ionicons name="options-outline" size={24} color={Colors.black} />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
