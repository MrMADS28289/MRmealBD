import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTab from "./Apps/Navigations/BottomTab";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <AnimTab3 /> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
