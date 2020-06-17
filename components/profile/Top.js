import React, { useState, useEffect, useContext } from 'react'
import { Button, Image, View, StyleSheet, TouchableOpacity, Text, DevSettings, Dimensions } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import UserContext from '../../contexts/UserContext'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100

function Avartar() {
  const [image, setImage] = useState(null)
  const [srcImage, setSrcImage] = useState('https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png')
  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  })

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    result.uri ? setSrcImage(result.uri) : console.log('Cancel')
    if (!result.cancelled) {
      setImage(result.uri)
    }
    console.log(result);
  }

  return (
    <View style={styles.avatar}>
      <TouchableOpacity onPress={pickImage} >
        <Image
          source={{ uri: srcImage }}
          style={{ width: 120, height: 120, borderRadius: 9999, borderColor: 'tomato', borderWidth: 4 }} 
          onClick={pickImage}
        />
      </TouchableOpacity>
    </View>
  )
}

function Info() {
  const { socket } = useContext(UserContext) // useContext(UserContext) tra ve value
  const { idUser } = useContext(UserContext)
  const handleLogout = () => {
    socket.emit('clientLogout', idUser)
  }
  return (
    <View>
      <View>
      </View>
      <View style={{ marginBottom: 4, marginTop: 7 }}>
        <Button title="27 Following" />
      </View>
      <View>
        <Button title="12 Follower" />
      </View>
      <View style={{ marginBottom: 1, marginTop: 4 }}>
        <Button title="Logout" color="tomato" onPress={ () => handleLogout() } />
      </View>
    </View>
  )
}


function TopProfile(props) {
  return (
    <View style={styles.container}>
      <Avartar/>
      <Info />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: screenWidth(2),
    paddingTop: screenHeight(5),
    paddingBottom: screenHeight(5),
    flexDirection: 'row',
    backgroundColor: '#2089dc66',
    marginHorizontal: screenWidth(2),
    marginTop: screenWidth(2)
  },
  avatar: {
    marginLeft: screenWidth(1),
    marginRight: screenWidth(5),
    top: screenHeight(0.5)
  }
})


export default TopProfile