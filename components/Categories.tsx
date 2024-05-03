import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { categories } from "@/assets/data/home";
import Colors from "@/constants/Colors";

const Categories = () => {
  return (
    <View>
      <Text className="text-black text-xl mx-4 font-bold">Top Seller</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 15,
          marginTop: 7,
        }}
      >
        {categories.map((category, index) => (
          <View style={styles.categoryCard} key={index}>
            <Image source={category.img} />
            <Text style={styles.categoryText}>{category.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: Colors.gold,
    marginEnd: 10,
    elevation: 100,
    shadowColor: Colors.gold,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    borderRadius: 4,
  },
  categoryText: {
    color: "#fff",
    padding: 6,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Categories;
