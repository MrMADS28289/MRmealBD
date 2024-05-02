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
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
// import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => (
  <View className="bg-black" style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          size={20}
          color={Colors.medium}
        />
        <TextInput style={styles.input} placeholder="Searce your dishes" />
      </View>
      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  // const bottomSheetRef = useRef < BottomSheetModal > null;

  const openModal = () => {
    // bottomSheetRef.current?.present();
    console.log("openModal");
  };

  return (
    <SafeAreaView className="bg-black" style={styles.safeArea}>
      {/* <BottomSheet ref={bottomSheetRef} /> */}

      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <View
            style={{
              backgroundColor: "black",
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <FontAwesome6 name="location-dot" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery · Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          {/* <Ionicons name="person-outline" size={20} color={Colors.primary} /> */}
          <MaterialCommunityIcons
            name="dots-vertical"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20,
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
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gold,
  },
  input: {
    padding: 10,
    color: "black",
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
