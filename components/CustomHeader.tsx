import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView className="flex-1 bg-yellow-400 pt-6">
      <BottomSheet ref={bottomSheetRef} />

      <View className="bg-yellow-400 h-[60px] flex-row items-center justify-between px-4">
        <View className="flex-row h-[45px]">
          <View className="justify-center items-center mr-1">
            <Image
              className="h-[29px] w-[55px] "
              source={require("../assets/logo/LogoWhite.png")}
            />
          </View>
          <View>
            <Text className="text-white text-[15px] font-bold">MRmealBD</Text>
            <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
              <View className="flex-row items-center gap-1">
                <FontAwesome6 name="location-dot" size={12} color="white" />
                <Text className="text-white text-[13px] font-bold">
                  Moimonsingo
                </Text>
                <View className="pt-[2px] font-bold">
                  <Ionicons
                    name="chevron-down"
                    size={15}
                    color={Colors.white}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="mr-2">
            <Text className="absolute top-[-3px] right-0 text-[10px] text-white font-bold bg-red-500 h-[7px] w-[7px] rounded-full items-center" />
            <Ionicons name="notifications-outline" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-yello-300 rounded-full">
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
