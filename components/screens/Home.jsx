import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../Categories";
import Restaurants from "../Restaurants";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView className="pt-[140px]">
        <Categories />
        <Text className="text-xl font-bold mx-4 my-2 pt-2">Our Special!</Text>
        <Restaurants />
        <Text className="text-xl font-bold mx-4 my-2 pt-2">Best Offers!</Text>
        <Restaurants />
        <Text className="mt-40" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
