import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { Container, Header, Item, Input } from 'native-base';
import { } from 'react-native-vector-icons/Ionicons'
import Masonry from 'react-native-masonry'
import MasonryList from "react-native-masonry-list"
import FullScreen from './FullScreen'
import ImageLayout from "react-native-image-layout";
import { API } from '../../constants/api'
import { postMethod, jsonHeader } from '../../constants/fetchTool'


function GridImage(props) {

    const images = [
        {
            source: require("../../assets/image4.jpg"),
            link: '../../assets/image4.jpg',
            width: 564,
            height: 564
        },
        {
            source: require("../../assets/b72e2df60fbc06a54ff1e98cc79a1f7c.jpg"),
            width: 564,
            link: '../../assets/b72e2df60fbc06a54ff1e98cc79a1f7c.jpg',
            height: 564
        },
        {
            source: require("../../assets/b72e2df60fbc06a54ff1e98cc79a1f7c.jpg"),
            width: 564,
            link: '../../assets/b72e2df60fbc06a54ff1e98cc79a1f7c.jpg',
            height: 564
        },
        {
            source: require("../../assets/image2.jpg"),
            width: 564,
            link: '../../assets/image2.jpg',
            height: 564
        },
        {
            source: require("../../assets/image3.jpg"),
            width: 564,
            link: '../../assets/image3.jpg',
            height: 564
        },
        {
            source: require("../../assets/topic/phongcanh.jpg"),
            width: 564,
            link: '../../assets/topic/phongcanh.jpg',
            height: 846
        },
        {
            source: require("../../assets/topic/phongcanh.jpg"),
            width: 564,
            link: '../../assets/topic/phongcanh.jpg',
            height: 846
        },
        {
            source: require("../../assets/topic/phongcanh.jpg"),
            width: 564,
            link: '../../assets/topic/phongcanh.jpg',
            height: 846
        },
        {
            source: require("../../assets/topic/phongcanh.jpg"),
            width: 564,
            link: '../../assets/topic/phongcanh.jpg',
            height: 846
        },
        
    ]

    const { height, width } = Dimensions.get('window')
    const [clickedImage, setClickImage] = useState(false);

    const clickImage = (object, number) => {
        console.log(object)
        props.click(object.link)
    }


    return (
        
        <View style={styles.container}>
            <MasonryList
                images={images}
                imageContainerStyle={styles.image}
                backgroundColor='none'
                columns={3}
                spacing={2}
                onPressImage={clickImage}
            />
        </View>

    )
}

var styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    image: {
        borderRadius: 10
    }
})

export default GridImage;