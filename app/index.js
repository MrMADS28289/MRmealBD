import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/Images/delivery.jpg")}
        className="w-full h-[405px] object-cover"
      />
      <Animated.View
        entering={FadeInDown.duration(600)}
        className="p-8 rounded-t-3xl bg-yellow-400 h-full mt-[-20px]"
      >
        <Animated.Text
          entering={FadeInDown.duration(200)}
          className="text-[30px] text-center font-bold text-gray-800 mt-4"
        >
          MRMEALBD.COM
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(300)}
          className="text-[20px] text-white mt-6 font-bold text-center"
        >
          Foodies Welcome Here!
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(400)}
          className="text-[10px] text-white mt-4"
        >
          "A restaurant is a place where you go to celebrate a special occasion,
          or to create a new one."
        </Animated.Text>
        <Animated.View entering={FadeInDown.duration(500)}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            className="p-4 bg-gray-900 rounded-full mt-20 border-2 border-cyan-50"
          >
            <Text className="text-slate-100 font-bold text-center text-[18px]">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;
