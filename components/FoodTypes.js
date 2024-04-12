import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodTypes = () => {

    const types = [
        {
            id: "0",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Biryani",
        },
        {
            id: "1",
            image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
            name: "Dessert"
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Burger"
        },
        {
            id: "3",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHx8MHx8fDA%3D",
            name: "Salad",

        },
        {
            id: "4",
            image: "https://media.istockphoto.com/id/1267115650/photo/tasty-cheesy-sandwich.jpg?s=1024x1024&w=is&k=20&c=ISMyCxo0pF2MVB6Z1alsDY-ld8TCUGhaHQ75YCSJc9E=",
            name: "Sandwiches"
        },
        {
            id: "5",
            image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Pizza"
        }
    ];

    const renderItem = ({ item }) => (
        <View style={{ marginHorizontal: 10, marginVertical: 20}}>
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