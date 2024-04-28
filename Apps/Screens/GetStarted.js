import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function GetStarted() {
  return (
    <View>
      <Image
        source={require("./../../assets/Images/delivery.jpg")}
        className="w-full h-[405px] object-cover"
      />
      <View className="p-8 rounded-t-3xl bg-yellow-400 h-full mt-[-20px]">
        <Text className="text-[30px] text-center font-bold text-gray-800">
          MRMEALBD.COM
        </Text>
        <Text className="text-[20px] text-white mt-4 font-bold text-center">
          Foodies Welcome Here!
        </Text>
        <Text className="text-[10px] text-white mt-2">
          "A restaurant is a place where you go to celebrate a special occasion,
          or to create a new one."
        </Text>
        <TouchableOpacity
          onPress={() => console.log("signin")}
          className="p-4 bg-gray-900 rounded-full mt-20 border-2 border-cyan-50"
        >
          <Text className="text-slate-100 font-bold text-center text-[18px]">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
