import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
// import * as WebBrowser from "expo-web-browser";
import Loading from "../../components/Loading";
import LottieView from "lottie-react-native";
// import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
// import { useOAuth, useSignIn } from "@clerk/clerk-expo";

// WebBrowser.maybeCompleteAuthSession();

export default function LogIn() {
  // login with google

  // useWarmUpBrowser();
  // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  // const googleSignIn = React.useCallback(async () => {
  //   try {
  //     const { createdSessionId, signIn, signUp, setActive } =
  //       await startOAuthFlow();

  //     if (createdSessionId) {
  //       setActive({ session: createdSessionId });
  //     } else {
  //       // Use signIn or signUp for next steps such as MFA
  //     }
  //   } catch (err) {
  //     console.error("OAuth error", err);
  //   }
  // }, []);

  // const router = useRouter();
  // const { signIn, setActive, isLoaded } = useSignIn();
  // const emailRef = useRef("");
  // const passwordRef = useRef("");
  // const [loading, setLoading] = useState(false);

  // const see = () => {
  //   if (!emailRef.current || !passwordRef.current) {
  //     Alert.alert("Sign In", "Please fill all the fields");
  //   }
  //   console.log(emailRef, passwordRef);
  // };

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
            source={require("../../assets/Images/login.png")}
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
            Sign In
          </Text>

          <View className="gap-4 mt-4">
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
            <View>
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
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-right text-white mt-1"
              >
                Forgot password?
              </Text>
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
                    Login
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-white"
              >
                Don't have an account?{" "}
              </Text>
              <Pressable onPress={() => router.push("/register")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-neutral-800 underline"
                >
                  Signup
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
                onPress={googleSignIn}
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
