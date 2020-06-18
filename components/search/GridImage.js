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
            uri: "https://i.pinimg.com/236x/bb/ff/b9/bbffb9f400aeb9300d29b1a7aeb23edc.jpg"
          },
          {
            uri: "https://vnn-imgs-f.vgcloud.vn/2018/03/08/16/nu-phuot-thu-7.jpg"
          },
          {
            uri: "https://motosaigon.vn/wp-content/uploads/2016/12/959-Panigale-Ducati-nu-biker-iron-man-motosaigon-4.jpg"
          },
          {
            uri: "https://motosaigon.vn/wp-content/uploads/2019/07/nu-biker-cuoi-ducati-panigale-v4-iron-man-motosaigon-1-1.jpg"
          },
          {
            uri: "https://media.gettyimages.com/photos/portrait-of-mature-male-motorcyclist-on-arid-plain-cagliari-sardinia-picture-id521980023?s=612x612"
          },
          {
            uri: "https://vnn-imgs-f.vgcloud.vn/2018/03/08/16/nu-phuot-thu-3.jpg"
          },
          {
            uri: "https://vnn-imgs-f.vgcloud.vn/2018/04/15/16/dan-hotgirl-xinh-dep-do-dang-cung-hang-ngan-mo-to-khung.jpg"
          },
          {
            uri: "https://caphemoingay.com/wp-content/uploads/iamges/2020/01/10/349350708403.jpg"
          },
          {
            uri: "https://pro-biker.vn/image/cache/data/bao-tay/Bao-tay-probiker-dai-den-3-800x800.jpg"
          },
          {
            uri: "https://media.sohuutritue.net.vn/resize/500x333/files/huongmi/2018/03/08/doan-trang-1203.jpeg"
          },
          {
            uri: "https://www.gamemaps.com/img/game_icons/gtavc.jpg"
          },      
        
    ]

    const { height, width } = Dimensions.get('window')
    const [clickedImage, setClickImage] = useState(false);

    const clickImage = (object, number) => {
        console.log(object)
        props.click(object)
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