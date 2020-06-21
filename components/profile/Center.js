import React, { useState, useEffect, useContext } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions, ScrollView } from 'react-native'
import { Button, Header } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import UserContext from '../../contexts/UserContext'
import ImageItem from './ImageItem'
import MasonryList from "react-native-masonry-list";

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

import { Container, Item, Input, Icon } from 'native-base';


function CenterProfile(props) {

 let data = [
    {
      uri: "https://i.pinimg.com/236x/bb/ff/b9/bbffb9f400aeb9300d29b1a7aeb23edc.jpg",
      id: "Hainn"
    },
    {
      uri: "https://vnn-imgs-f.vgcloud.vn/2018/03/08/16/nu-phuot-thu-7.jpg",
      id: "Hainn"
    },
    {
      uri: "https://motosaigon.vn/wp-content/uploads/2016/12/959-Panigale-Ducati-nu-biker-iron-man-motosaigon-4.jpg",
      id: "Hainn"
    },
    {
      uri: "https://motosaigon.vn/wp-content/uploads/2019/07/nu-biker-cuoi-ducati-panigale-v4-iron-man-motosaigon-1-1.jpg",
      id: "Hainn"
    },
    {
      uri: "https://media.gettyimages.com/photos/portrait-of-mature-male-motorcyclist-on-arid-plain-cagliari-sardinia-picture-id521980023?s=612x612",
      id: "Hainn"
    },
    {
      uri: "https://vnn-imgs-f.vgcloud.vn/2018/03/08/16/nu-phuot-thu-3.jpg",
      id: "Hainn"
    },
    {
      uri: "https://vnn-imgs-f.vgcloud.vn/2018/04/15/16/dan-hotgirl-xinh-dep-do-dang-cung-hang-ngan-mo-to-khung.jpg",
      id: "Hainn"
    },
    {
      uri: "https://caphemoingay.com/wp-content/uploads/iamges/2020/01/10/349350708403.jpg",
      id: "Hainn"
    },
    {
      uri: "https://pro-biker.vn/image/cache/data/bao-tay/Bao-tay-probiker-dai-den-3-800x800.jpg",
      id: "Hainn"
    },
    {
      uri: "https://media.sohuutritue.net.vn/resize/500x333/files/huongmi/2018/03/08/doan-trang-1203.jpeg",
      id: "Hainn"
    },
    {
      uri: "https://www.gamemaps.com/img/game_icons/gtavc.jpg",
      id: "Hainn"
    }
  ];
  

  const [isLoading, setIsLoading] = useState(false)
  function handleSearch() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  function onPressImage(object, index) {
    console.log(object)
  }

  return (
    <View style={styles.container}>
      <Item style={styles.inputSearch}>
        <Icon style={{paddingLeft: 10}} name="ios-search" />
        <Input placeholder="Search" />
        {
          isLoading ? (
            <Button loading title="Search" />
          ) : (
              <Button onPress={() => handleSearch()} title="Search" />
            )
        }
      </Item>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ flexDirection: 'row', paddingBottom: 910, paddingTop: 10 }}>
          <View style={{ width: windowWidth * 1}}>
            <MasonryList
              columns={3}
              sorted={true}
              onPressImage={ (object, index) => onPressImage(object, index)}
              images={data}
            />
          </View>
          {/* <View>
            {
              data.map((url, i) => {
                return (
                  <TouchableOpacity onPress={() => console.log(i)}>
                    <ImageItem url={url} />
                  </TouchableOpacity>
                )
              })
            }
          </View> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: screenWidth(2)
  },
  imgContainer: {
    borderRadius: 15,
    marginLeft: screenWidth(3),
    width: screenWidth(45),
    marginVertical: screenWidth(3)
  }, 
  inputSearch: {
    marginLeft: screenWidth(2),
    marginRight: screenWidth(0.6)
  }
})


export default CenterProfile