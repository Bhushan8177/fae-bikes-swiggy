import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickFoodData from "../data/QuickFoodData";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const QuickFood = () => {
  const data = QuickFoodData;

  const renderItem = ({ item }) => (
    <View>
      <Pressable key={item.id} style={{ margin: 10 }}>
        <ImageBackground
          imageStyle={{ borderRadius: 6 }}
          style={{ aspectRatio: 5 / 6, height: 170 }}
          source={{ uri: item.image }}
        >
          <LinearGradient
            colors={["rgba(27, 30, 36, 0)", "rgb(27, 30, 36)"]}
            style={{height: 40, marginTop: 140, borderRadius: 6, width: "100%"}}
          >
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                fontSize: 28,
                fontWeight: "bold",
                color: "black",
              }}
            >
              {item.offer} OFF
            </Text>
          </LinearGradient>
        </ImageBackground>
        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: "500" }}>
          {item.name}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <MaterialIcons name="stars" size={24} color="green" />
          <Text style={{ marginLeft: 6, fontSize: 15, fontWeight: "400" }}>
            {item.rating}
          </Text>
          <Text>・</Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            {item.time} mins
          </Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "500", marginVertical: 5, marginBottom: 10}}>Get it Quickly</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true} // Set horizontal prop to false
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
