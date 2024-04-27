import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../../src/screens/Home";
import WishList from "../Screens/WishLists";
import Order from "../Screens/Orders";
import Account from "../Screens/Account";

const Tab = createMaterialBottomTabNavigator();
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
