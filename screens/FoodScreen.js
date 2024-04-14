import { View, Text, ScrollView, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import HotelData from "../data/HotelData";
import MenuItem from "../components/MenuItem";
import { Ionicons } from "@expo/vector-icons";
import InstamartData from "../data/InstamartData";


export default function FoodScreen() {
  const route = useRoute();
  console.log(route);
  const data = (route.name==="Food") ? HotelData : InstamartData;
  return (
    <ScrollView>
        <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            // margin: 10,
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            // margin: 10,
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
          }}
        >
          <Text>Sort By Rating</Text>
          {/* <Ionicons name="filter" size={24} color="black" /> */}
        </Pressable>
        <Pressable
          style={{
            // margin: 10,
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            // width: 120
          }}
        >
          <Text>Sort By Price</Text>
          {/* <Ionicons name="filter" size={24} color="black" /> */}
        </Pressable>
      </View>
      {/* Menu Item Starts */}
      {data.map((item, index) => {
        return <MenuItem key={index} item={item} />;
      })}
      {/* Menu Item Ends */}
    </ScrollView>
  );
}
