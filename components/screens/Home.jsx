import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../Categories";
import Restaurants from "../Restaurants";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView className="pt-[80px]">
        <Categories />
        <Text className="text-xl font-bold mx-4 my-2 pt-2">Our Resturents</Text>
        <Restaurants />
        <Text className="text-xl font-bold mx-4 my-2 pt-2">Offers!</Text>
        <Restaurants />
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          aperiam enim molestias recusandae veniam quae magnam atque distinctio
          impedit sequi cum nemo amet, numquam voluptates temporibus placeat ex
          harum nulla.
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          aperiam enim molestias recusandae veniam quae magnam atque distinctio
          impedit sequi cum nemo amet, numquam voluptates temporibus placeat ex
          harum nulla.
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          aperiam enim molestias recusandae veniam quae magnam atque distinctio
          impedit sequi cum nemo amet, numquam voluptates temporibus placeat ex
          harum nulla.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
