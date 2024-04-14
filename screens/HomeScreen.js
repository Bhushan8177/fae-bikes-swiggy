import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import HotelData from "../data/HotelData";
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
  const data = HotelData;
  return (
    <View style={{ marginTop: 10 }}>
      {/* Searchbar starts */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for restaurant or food items"
        />
        {/* search icon */}
        <AntDesign name="search1" size={24} color="#E32636" />
      </View>
      {/* Searchbar ends */}
      {/* Carousel starts */}
      <Carousel />
      {/* Carousel ends */}
      {/* FoodItem Types Starts */}
      <FoodTypes />
      {/* FoodItem Types Ends */}
      {/* Quick Food Starts */}
      <QuickFood />
      {/* Quick Food Ends */}

      {/* Filter button starts */}
      
      {/* Filter button ends */}
      {/* Menu Item Starts */}
      {/* {data.map((item, index) => (
                  <MenuItem key={index} item={item} />
              ))
  
              } */}
      {/* Menu Item Ends */}
    </View>
  );
};

export default HomeScreen;
