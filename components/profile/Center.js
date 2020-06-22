import React, { useState, useEffect, useContext } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions, ScrollView, AsyncStorage } from 'react-native'
import { Button, Header } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import UserContext from '../../contexts/UserContext'
import ImageItem from './ImageItem'
import MasonryList from "react-native-masonry-list";

import { API } from '../../constants/api'
import { postMethod, jsonHeader } from '../../constants/fetchTool'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

import { Container, Item, Input, Icon } from 'native-base';


function CenterProfile(props) {

  const [images, setImages] = useState([])
  const { socket } = useContext(UserContext)

  function getImages() {
    fetch(API.GET_IMAGES_BY_USERID + `/${props.user.userId}`, {
      headers: jsonHeader.headers,
      method: 'GET',
    }).then(response => response.json())
      .then((res) => {
        setImages(res.data.images)
        if (res.code == 200) {
        } else {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getImages()
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  function handleSearch() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  function onPressImage(object, index) {
    // console.log(object)
    socket.emit('clientClickImageFromProfile', {
      userName: props.user.userName,
      image: object
    })
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
              columns={2}
              sorted={true}
              onPressImage={ (object, index) => onPressImage(object, index)}
              images={images}
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