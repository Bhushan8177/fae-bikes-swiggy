import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodTypes = () => {

    const types = [
        {
            id: "0",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
            name: "Biriyani",
        },
        {
            id: "1",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
            name: "Dessert"
        },
        {
            id: "2",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
            name: "Burger"
        },
        {
            id: "3",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
            name: "Salad",

        },
        {
            id: "4",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
            name: "Sandwiches"
        }
    ];

    const renderItem = ({ item }) => (
        <View style={{ margin : 10}}>
            <Image 
                source={{ uri: item.image }} 
                style={{ width: 60, height: 60, borderRadius:30}}
            />
            <Text style={{ marginTop: 10, textAlign: 'center'}}>{item.name}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={types}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true} // Set horizontal prop to false
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default FoodTypes

const styles = StyleSheet.create({})