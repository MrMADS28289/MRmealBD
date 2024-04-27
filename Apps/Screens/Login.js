import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <Image
        source={require("./../../assets/Images/delivery.jpg")}
        className="w-full h-[405px] object-cover"
      />
      <View className="p-8 rounded-t-3xl bg-gray-100 h-full mt-[-20px]">
        <Text className="text-[30px] font-bold text-yellow-400 ">
          MRMEALBD.COM
        </Text>
        <Text className="text-[22px] text-slate-500 mt-4 font-bold">
          Foodies welcome here!
        </Text>
        <Text className="text-[16px] text-slate-400 mt-2">
          "A restaurant is a place where you go to celebrate a special occasion,
          or to create a new one."
        </Text>
        <TouchableOpacity
          onPress={() => console.log("signin")}
          className="p-4 bg-yellow-400 rounded-full mt-20"
        >
          <Text className="text-white text-center text-[18px]">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
