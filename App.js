import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import AnimTab2 from "./src/bottomTab/AnimTab2";
// import AnimTab1 from "./src/bottomTab/AnimTab1";
// import AnimTab3 from "./src/bottomTab/AnimTab3";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <AnimTab3 /> */}
      <NavigationContainer>
        <Text>Open up App.js to start working on your app!</Text>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
