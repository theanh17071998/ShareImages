import React, { useState, useEffect, useContext } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import UserContext from '../../contexts/UserContext'
import ImageItem from './ImageItem'
const windowWidth = Dimensions.get('window').width;

import { Container, Header, Item, Input, Icon } from 'native-base';

const data = [
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg',
  'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'
]


function CenterProfile(props) {
  const [isLoading, setIsLoading] = useState(false)
  function handleSearch() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        {
          isLoading ? (
            <Button loading title="Search" />
          ) : (
            <Button onPress={ () => handleSearch()} title="Search" />
          )
        }
      </Item>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ flexDirection: 'row', paddingBottom: 750, paddingTop: 10 }}>
          <View style={{ width: windowWidth* 0.48, right: 6 }}>
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
            <ImageItem url={'https://i.pinimg.com/originals/4c/6d/20/4c6d205f87a077b30eaa8871b252a275.jpg'} />
          </View>
          <View>
            {
              data.map((url, i) => {
                return (
                  <TouchableOpacity onPress={ () => console.log(i)}>
                    <ImageItem url={url} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})


export default CenterProfile