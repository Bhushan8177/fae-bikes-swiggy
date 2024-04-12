import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const LoadingScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    // console.log("LoadingScreen",route.params);
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Order", {
                name: route.params.name,                            
            })
        }, 2000)
    }, [])
    return (
        <View>
            <AnimatedLottieView
                style={{
                    height: 260,
                    alignSelf: "center",
                    marginTop: 40,
                    justifyContent: "center"
                }}
                autoPlay
                loop={false}
                speed={0.7}
                source={require("../assets/thumbs.json")}
            />
            <Text style={{
                marginTop: 20,
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center"
            }}>Your Order Has been Received</Text>
            <AnimatedLottieView
                style={{
                    height: 300,
                    position: "absolute",
                    alignSelf: "center",
                    top: 100,
                    width: 300
                }}
                autoPlay
                loop={false}
                speed={0.7}
                source={require("../assets/sparkle.json")}
            />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})