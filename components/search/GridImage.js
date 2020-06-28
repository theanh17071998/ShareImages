import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { Container, Header, Item, Input } from 'native-base';
import { } from 'react-native-vector-icons/Ionicons'
import Masonry from 'react-native-masonry'
import MasonryList from "react-native-masonry-list"
import FullScreen from './FullScreen'
import ImageLayout from "react-native-image-layout";
import { API } from '../../constants/api'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool'
import UserContext from '../../contexts/UserContext'


function GridImage(props) {

  const { socket } = useContext(UserContext)
  const [user, setUser] = useState({})
  useEffect(() => {
      AsyncStorage.getItem('user').then((userTemp) => {
          if (userTemp) {
              setUser(JSON.parse(userTemp))
              socket.emit('clientJoinRoom', JSON.parse(userTemp).userName)
              socket.on('serverClickSearchTag', tag => {
                setImages([])
                getData(tag)
              })
          }
      })
      getData('gai-xinh')
  }, [])

  function getData(tag) {
    fetch(API.GET_IMAGES_BY_TAG + `/${tag}`, {
        headers: jsonHeader.headers,
        method: getMethod.method,
      }).then(response => response.json())
      .then((res) => {
          if (res.code == 200) {
            setImages(res.data.images)
          } else {
              console.log('ERROR')
          }
      })
      .catch((err) => {
          console.log(err)
      })
  }
  const { height, width } = Dimensions.get('window')
  const [clickedImage, setClickImage] = useState(false);
  const [images, setImages] = useState([]) 

  const clickImage = (object, number) => {
    props.click(object)
  }


  return (

    <View style={styles.container}>
      <MasonryList
        images={images}
        imageContainerStyle={styles.image}
        backgroundColor='none'
        columns={2}
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