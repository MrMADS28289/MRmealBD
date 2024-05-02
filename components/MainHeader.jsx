import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
import Colors from "../constants/Colors";

const MainHeader = () => {
  const openModal = () => {
    // bottomSheetRef.current?.present();
    console.log("openModal");
  };

  return (
    <SafeAreaView className="flex-1 bg-yellow-400">
      {/* <BottomSheet ref={bottomSheetRef} /> */}

      <View className="bg-yellow-400 h-[60px] flex-row items-center justify-between px-4">
        <View className="flex-row gap-2">
          <View className="h-[42px] w-[42px] border border-white rounded-full items-center justify-center">
            <Image
              className="h-[40px] w-[40px] rounded-full"
              source={require("../assets/Images/mrmeal.jpeg")}
            />
          </View>
          <View>
            <Text className="text-white text-base font-bold">MRmealBD</Text>
            <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
              <View className="flex-row items-center gap-1">
                <FontAwesome6 name="location-dot" size={15} color="white" />
                <Text className="text-white text-md font-bold">
                  Moimonsingo
                </Text>
                <View className="pt-[2px] font-bold">
                  <Ionicons
                    name="chevron-down"
                    size={18}
                    color={Colors.white}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="border border-white bg-yello-300 rounded-full">
          {/* <Ionicons name="person-outline" size={20} color={Colors.primary} /> */}
          <MaterialCommunityIcons
            name="dots-vertical"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
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

export default MainHeader;
