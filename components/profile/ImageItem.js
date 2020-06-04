// import * as React from 'react'
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, ScrollView, Dimensions } from 'react-native'
// import { AsyncStorage } from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome'
// import { Input, Button, Modal } from 'react-native-elements'
// import { hash256 } from '../../constants/common'
// import { API } from '../../constants/api'
// import { postMethod, jsonHeader } from '../../constants/fetchTool'
const windowWidth = Dimensions.get('window').width;



function ImageItem(props) {

  const [userName, setUserName] = useState('')
  return (
    <View style={{ width: windowWidth * 0.5, paddingBottom: 10 }}>
      <Image
        source={{ uri: props.url }} 
        style={{
          alignSelf: 'center',
          height: 150,
          width: windowWidth * 0.48,
          borderWidth: 1,
          borderRadius: 10
        }}
        resizeMode="stretch"
      />
    </View>
  )
}


const styles = StyleSheet.create({
})



export default ImageItem