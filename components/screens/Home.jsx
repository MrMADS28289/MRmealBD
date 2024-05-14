import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Categories from "../Categories";
import Restaurants from "../Restaurants";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 dark:bg-neutral-900 ">
      <ScrollView className="pt-[140px]">
        <Categories />
        <Text className="text-xl font-bold mx-4 my-2 pt-2 dark:text-white">
          Our Special!
        </Text>
        <Restaurants />
        <Text className="text-xl font-bold mx-4 my-2 pt-2 dark:text-white">
          Best Offers!
        </Text>
        <Restaurants />
        <Text className="mt-40" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
