import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import { Ionicons } from '@expo/vector-icons';
import HotelData from '../data/HotelData';
import MenuItem from '../components/MenuItem';

const HomeScreen = () => {

    const data = HotelData
    return (
        <ScrollView style={{ marginTop: 10 }}>
            <View>
                {/* Searchbar starts */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderWidth: 1,
                    margin: 10,
                    padding: 10,
                    borderColor: "#C0C0C0",
                    borderRadius: 7
                }}>
                    <TextInput style={{ fontSize: 17 }} placeholder='Search for restaurant or food items' />
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
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    <Pressable style={{
                        // margin: 10,
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        width: 120
                    }}>
                        <Text style={{ marginRight: 6 }}>Filter</Text>
                        <Ionicons name="filter" size={20} color="black" />
                    </Pressable>
                    <Pressable style={{
                        // margin: 10,
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        width: 120,
                        justifyContent: "center"
                    }}>
                        <Text>Sort By Rating</Text>
                        {/* <Ionicons name="filter" size={24} color="black" /> */}
                    </Pressable>
                    <Pressable style={{
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
                    }}>
                        <Text>Sort By Price</Text>
                        {/* <Ionicons name="filter" size={24} color="black" /> */}
                    </Pressable>
                </View>
                {/* Filter button ends */}
            </View>
            {/* Menu Item Starts */}
            {data.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))

            }
            {/* Menu Item Ends */}
        </ScrollView>
    )
}

export default HomeScreen