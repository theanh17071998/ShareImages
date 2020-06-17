import * as React from 'react'
import { Button, View, Text, Dimensions } from 'react-native'
import TopProfileComponent from '../components/profile/Top'
import CenterProfileComponent from '../components/profile/Center'
import {Header } from 'react-native-elements'
import setting from '../assets/gear.png'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100

function ProfileScreen() {
  return (
    <View>
      <View>
        <Header
            placement="left"
            centerComponent={{ text: 'Nguyễn Ngọc Hải', style: { color: '#000', fontSize: 18, fontWeight: '700'}}}
            containerStyle={{height: screenHeight(10), marginTop: -10,  backgroundColor: '#fff', borderBottomWidth: 2}}
            rightComponent={{ icon: 'settings', color: '#000', borderRadius: '50%'}}
          />
        <TopProfileComponent />
        <CenterProfileComponent />
      </View>
    </View>
  )
}

export default ProfileScreen