import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import swiggy_img2 from '../assets/swiggy_img2.webp'


const Carousel = () => {

    const images = [
        "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
        swiggy_img2,
        "https://cdn.zoutons.com/images/originals/stores/SWIGGY1_1_1645774988.png"
    ];

    return (
        <View>
            <SliderBox
                images={images}
                autoplay
                circleLoop
                autoplayInterval={4000}
                dotColor="white"
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius: 6,
                    width: "95%"
                }}
                resizeMode="cover"
            />    
        </View>
    )
}

export default Carousel