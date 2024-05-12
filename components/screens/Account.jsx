import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Entypo,
  Ionicons,
  AntDesign,
  FontAwesome6,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import { useAuth } from "../../context/useContext";

export default function Account() {
  // const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="flex-1 items-center mt-8 pb-4 border-b-2 border-black">
          <View>
            <View className="border-2 border-black rounded-full">
              <Image
                className="h-[90px] w-[90px] rounded-full"
                source={require("../../assets/Images/masum.jpg")}
              />
            </View>
            <TouchableOpacity className="absolute items-center justify-center bottom-0 right-0 border-2 rounded-full bg-white w-[30px] h-[30px] border-black">
              <Entypo name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Text className="mt-2 text-xl font-bold text-black">
            Masum Abduss Sobhan
          </Text>
        </View>
        <View className="mt-6 mx-8">
          <TouchableOpacity>
            <View className="absolute top-0 right-0">
              <FontAwesome name="edit" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <Text className="text-[14px] font-bold text-black">
            Phone: 01734-326573
          </Text>
          <Text className="text-[14px] font-bold text-black">
            Email: abduss.sobhan28@gmail.com
          </Text>
          <Text className="text-[14px] font-bold text-black">
            Address: Horinakundu, Jhenaidah
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.item}>
            <AntDesign name="calendar" size={20} color="black" />
            <Text className="text-black" style={{ flex: 1 }}>
              My Subscription
            </Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="wallet-outline" size={22} color={Colors.black} />
            <Text className="text-black" style={{ flex: 1 }}>
              Wallet
            </Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="people-outline" size={22} color={Colors.black} />
            <Text className="text-black" style={{ flex: 1 }}>
              Reffer and Earn
            </Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={Colors.black}
            />
            <Text className="text-black" style={{ flex: 1 }}>
              Help and Support
            </Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <AntDesign name="exclamationcircleo" size={20} color="black" />
            <Text className="text-black" style={{ flex: 1 }}>
              FAQ's
            </Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={styles.item}>
            <Ionicons name="exit-outline" size={24} color={Colors.black} />
            <Text className="text-black" style={{ flex: 1 }}>
              Logout
            </Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.secondary,
    padding: 16,
    alignItems: "center",
    // borderRadius: 15,
    flex: 1,
    height: 56,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    marginTop: 25,
    backgroundColor: Colors.white,
    // padding: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 32,
  },
  header: {
    backgroundColor: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    color: Colors.white,
  },
  item: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderColor: Colors.black,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
    color: Colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.secondary,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  outlineButton: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 56,
  },
  outlineButtonText: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
