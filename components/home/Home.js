import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ListView, AsyncStorage } from 'react-native'
import MasonryList from "react-native-masonry-list";
import { Card, Header, SearchBar } from 'react-native-elements';
import UserContext from '../../contexts/UserContext'
import { API } from '../../constants/api'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PostImage from './PostImage'
import FullScreen from '../search/FullScreen';
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";


const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100


function Home(props) {

  // const [images, setImages] = useState([])

  // useEffect(() => {
  //   console.log('1')
  //   getData()
  // }, [])
  const { socket } = useContext(UserContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
      AsyncStorage.getItem('user').then((userTemp) => {
        if (userTemp) {
            setUser(JSON.parse(userTemp))
            socket.emit('clientJoinRoom', JSON.parse(userTemp).userName)
            socket.on('serverClickNotify', (notify) => {
              fetch(API.GET_IMAGE_BY_IMAGEID + `/${notify.imageId}`, {
                  headers: jsonHeader.headers,
                  method: 'GET'
              }).then(response => response.json())
                  .then((res) => {
                      if (res.code == 200) {
                        setObjectImage(res.data.images)
                          // console.log(image)
                          setPressImage(true)
                      }
                  })
                  .catch((err) => {
                      console.log(err)

                  })
            })
        }
    })
    getData()
  }, [])

  const clickPostImage = () => {
    setPressPostImage(true)
  }

  const [onPressPostImage, setPressPostImage] = React.useState(false)
  const [onPressImage, setPressImage] = React.useState(false)
  const [objectImage, setObjectImage] = React.useState()
  const [data, setData] = React.useState([
  ])
  const [scrollCount, setScrollCount] = React.useState(0)

  const getData = () => {

    fetch(API.GET_HOME_IMAGE + scrollCount, {
      headers: jsonHeader.headers,
      method: getMethod.method,
    }).then(response => response.json())
      .then((res) => {
        if (res.code == 200) {
          setData(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    onPressPostImage == false ? (
      onPressImage == false ? (
        <View>
          <Header
            containerStyle={{
              height: screenHeight(10), marginTop: -10, backgroundColor: '#fff', borderBottomWidth: 2,
            }}
            leftComponent={{
              text: 'ISHARE', style: {
                color: '#000', fontFamily: 'monospace', fontWeight: 'bold',
                textShadowColor: 'black'
              },
            }}
            rightComponent={{ icon: 'add-circle-outline', color: '#000', borderRadius: '50%', onPress: () => { clickPostImage() } }}
          />

          <ScrollView showsVerticalScrollIndicator={false}  >
            <MasonryList
              columns={2}
              sorted={true}
              onPressImage={(object, index) => {
                setObjectImage(object)
                setPressImage(true)
                console.log(object)
              }}
              images={data}
              imageContainerStyle={styles.imgContainer}
              listContainerStyle={styles.listContainer}
            />
          </ScrollView>
        </View>
      ) : (
          <FullScreen image={objectImage} clickBack={() => {
            setPressImage(false)
          }} navigation={props.navigation} />
        )
    ) : (
        <PostImage back={() => { setPressPostImage(false) }} />
      )

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgContainer: {
    borderRadius: 15,
    marginLeft: screenWidth(3),
    width: screenWidth(45),
    marginVertical: screenWidth(3)
  }
});

export default Home