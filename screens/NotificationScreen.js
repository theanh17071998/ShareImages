import * as React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import Notification from '../components/notification/notification'


 export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Notification navigation={navigation}/>
    </View>
  )
}
