import * as React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MasonryList from "react-native-masonry-list";
import { Card, Header } from 'react-native-elements';
import Home from '../components/home/Home'
import { API } from '../constants/api'
import { postMethod, jsonHeader, getMethod } from '../constants/fetchTool'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100


function HomeScreen() {
  return (
    <View>
      <Home />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgContainer: {
    borderRadius: 15,
    marginLeft: screenWidth(2),
    width: screenWidth(46),
    marginVertical: screenWidth(3)
  }
});

export default HomeScreen