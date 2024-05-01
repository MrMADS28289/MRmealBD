import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import Loading from "../../components/Loading";
import LottieView from "lottie-react-native";

export default function SignUp() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1">
        <View
          style={{ paddingTop: hp(4), paddingHorizontal: wp(5) }}
          className="items-center"
        >
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../../assets/Images/register.png")}
          />
        </View>

        <View
          style={{ paddingTop: hp(4), paddingHorizontal: wp(5) }}
          className="mt-6 bg-indigo-400 rounded-t-3xl h-full"
        >
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-white mt-4"
          >
            Sign Up
          </Text>

          <View className="gap-4 mt-4">
            <View
              style={{ height: hp(6.5) }}
              className="flex-row items-center px-4 bg-neutral-700 border border-white rounded-xl"
            >
              <MaterialIcons
                name="drive-file-rename-outline"
                size={hp(2.7)}
                color="white"
              />
              <TextInput
                onChangeText={(value) => (nameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-white mx-2"
                placeholder="Full name"
                placeholderTextColor={"white"}
              />
            </View>
            <View
              style={{ height: hp(6.5) }}
              className="flex-row items-center px-4 bg-neutral-700 border border-white rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="white" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-white mx-2"
                placeholder="Email address"
                placeholderTextColor={"white"}
              />
            </View>
            <View
              style={{ height: hp(6.5) }}
              className="flex-row items-center px-4 bg-neutral-700 border border-white rounded-xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="white" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-white mx-2"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor={"white"}
              />
            </View>

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(11)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={see}
                  style={{ height: hp(6.5) }}
                  className="bg-neutral-700 justify-center items-center border border-white rounded-xl"
                >
                  <Text
                    style={{ fontSize: hp(2.4) }}
                    className="text-white font-semibold tracking-wider"
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-white"
              >
                Have an account?{" "}
              </Text>
              <Pressable onPress={() => router.push("/login")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-neutral-800 underline"
                >
                  Signin
                </Text>
              </Pressable>
            </View>

            <View className="flex-row justify-center items-center">
              <Text
                style={{ width: wp(35) }}
                className="border-b border-white h-[1px] mr-2"
              />
              <Text className="text-white font-semibold">or</Text>
              <Text
                style={{ width: wp(35) }}
                className="border-b border-white h-[1px] ml-2"
              />
            </View>

            <View className="flex-row items-center justify-evenly">
              <TouchableOpacity
                style={{ aspectRatio: 1, height: hp(7) }}
                className="bg-white border border-neutral-800 rounded-2xl flex-row"
              >
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/Images/google.json")}
                  loop={false}
                  autoPlay
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ aspectRatio: 1, height: hp(7) }}
                className="bg-white border border-neutral-800 rounded-2xl flex-row"
              >
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/Images/facebook.json")}
                  loop={false}
                  autoPlay
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ aspectRatio: 1, height: hp(7) }}
                className="bg-white border border-neutral-800 rounded-2xl flex-row"
              >
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/Images/phone.json")}
                  loop={false}
                  autoPlay
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});
