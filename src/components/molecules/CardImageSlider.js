import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
// import { SliderBox } from "react-native-image-slider-box";
import Slideshow from 'react-native-image-slider-show';


const CardImageSlider = () => {
    const [images, setImages] = useState([
      { url:"https://source.unsplash.com/1024x768/?nature" },
      { url:"https://source.unsplash.com/1024x768/?water" },
      { url:"https://source.unsplash.com/1024x768/?girl" },
      { url:"https://source.unsplash.com/1024x768/?tree" },
    ])

  return (
    <View style={{ borderRadius:12, overflow:'hidden' }}>
     {/* <SliderBox images={images} /> */}
     <Slideshow 
      dataSource={images}
      height={420}
      
      arrowLeft={false}
      arrowRight={false}
      
      />
    </View>
  )
}

export default CardImageSlider

const styles = StyleSheet.create({

})