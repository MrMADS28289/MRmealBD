import "react-native-gesture-handler";
import { Stack, useNavigation } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              header: () => <CustomHeader />,
            }}
          />
          <Stack.Screen
            name="(modal)/filter"
            options={{
              presentation: "modal",
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.gold,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/settings"
            options={{
              presentation: "modal",
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.gold,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/location-search"
            options={{
              headerStyle: { backgroundColor: Colors.gold },
              headerTitleStyle: {
                color: "white",
              },
              presentation: "fullScreenModal",
              headerTitle: "Select location",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/dish"
            options={{
              presentation: "modal",
              headerTitle: "",
              headerTransparent: true,

              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.gold,
                    borderRadius: 20,
                    padding: 6,
                  }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="basket"
            options={{
              headerTitle: "Basket",
              headerTitleStyle: {
                color: Colors.gold,
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons name="arrow-back" size={28} color={Colors.gold} />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
