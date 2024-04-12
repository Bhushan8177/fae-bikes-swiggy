import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartReducer';

const MenuComponent = ({ food }) => {

    const dispatch = useDispatch();
    const [additems, setAddItems] = useState(0);
    const [selected, setSelected] = useState(false);

    return (
        <View>
            <Pressable style={{ margin: 10, flexDirection: "row", justifyContent: "space-between" }}>
                {/* Left Part */}
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>{food.name}</Text>
                    <Text>{food.price}</Text>
                    <Text>
                        {[0, 0, 0, 0, 0].map((en, i) => (
                            <FontAwesome
                                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                                style={{ paddingHorizontal: 3 }}
                                size={15}
                                color="#FFD700"
                            />
                        ))}
                    </Text>
                    <Text style={{ width: 180, marginTop: 8, color: "gray", fontSize: 16 }}>{food.description.length > 30 ? food.description.substr(0, 34) + "..." : food.description}</Text>
                </View>
                {/* Right Part */}
                <Pressable style={{ marginRight: 10 }}>
                    <Image style={{ width: 120, height: 120, borderRadius: 8 }} source={{ uri: food.image }} />
                    {selected ? (
                        <Pressable
                            style={{
                                position: "absolute",
                                top: 90,
                                left: 15,

                                flexDirection: "row",
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                alignItems: "center",
                                backgroundColor: "white",
                                borderRadius: 5,
                            }}
                        >
                            <Pressable onPress={() => {
                                if (additems === 1) {
                                    dispatch(removeFromCart(food))
                                    setSelected(false)
                                    setAddItems(0);
                                } else {
                                    setAddItems((c) => c - 1);
                                    dispatch(decrementQuantity(food))

                                }
                            }}>
                                <Text
                                    style={{
                                        fontSize: 25,
                                        color: "green",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Pressable>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "green",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    {additems}
                                </Text>
                            </Pressable>

                            <Pressable onPress={() => {
                                setAddItems((c) => c + 1);
                                dispatch(incrementQuantity(food))
                            }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "green",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>
                    ) : (
                        <Pressable
                            onPress={() => {
                                setSelected(true);
                                if (additems == 0) {
                                    setAddItems((c) => c + 1);
                                }
                                dispatch(addToCart(food));
                            }}
                            style={{
                                position: "absolute",
                                top: 90,
                                left: 20,

                                flexDirection: "row",
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                alignItems: "center",
                                backgroundColor: "white",
                                borderRadius: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "600",
                                    color: "#018749",
                                }}
                            >
                                ADD
                            </Text>
                        </Pressable>
                    )}
                </Pressable>
            </Pressable>
        </View>
    )
}

export default MenuComponent

const styles = StyleSheet.create({})