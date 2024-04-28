import React from "react";
import { StyleSheet, View } from "react-native";
import WishList from "../Screens/WishLists";
import Order from "../Screens/Orders";
import Account from "../Screens/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wish List" component={WishList} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTab;
