import * as React from 'react'
import { Button, View, Text } from 'react-native'
import TopProfileComponent from '../components/profile/Top'
import CenterProfileComponent from '../components/profile/Center'

function ProfileScreen() {
  return (
    <View>
      <View>
        <TopProfileComponent />
        <CenterProfileComponent />
      </View>
    </View>
  )
}

export default ProfileScreen