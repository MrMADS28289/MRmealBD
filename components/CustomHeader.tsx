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
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black pt-6">
      <BottomSheet ref={bottomSheetRef} />

      <View className="bg-white dark:bg-black h-[60px] flex-row items-center justify-between px-4">
        <View className="flex-row h-[45px]">
          <View className="justify-center items-center mr-2 h-[45px] w-[45px] overflow-hidden rounded-full">
            <Image
              className="h-[60px] w-[60px] "
              source={require("../assets/logo/logoCircle.png")}
            />
          </View>
          <View>
            <Text className="text-[13px] font-bold text-black dark:text-white">
              {t("dTo")}
            </Text>
            <Link href={"/(modal)/location-search"} asChild>
              <TouchableOpacity style={styles.titleContainer}>
                <View className="flex-row items-center gap-1">
                  <FontAwesome6
                    name="location-dot"
                    size={12}
                    color={colorScheme == "dark" ? Colors.white : Colors.black}
                  />
                  <Text className="text-[13px] font-bold text-black dark:text-white">
                    Moimonsingo
                  </Text>
                  <View className="pt-[2px] font-bold">
                    <Ionicons
                      name="chevron-down"
                      size={15}
                      color={
                        colorScheme == "dark" ? Colors.white : Colors.black
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="mr-2">
            <Text className="absolute top-[-3px] right-0 text-[10px] font-bold bg-red-500 h-[7px] w-[7px] rounded-full items-center" />
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={openModal}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
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
