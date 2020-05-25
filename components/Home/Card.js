import React from 'react'
import { View, Dimensions, StyleSheet, Text }from 'react-native'
import { Tile } from 'react-native-elements';
import image from '../../assets/2eafd564152f02bc2db7363c60a47a56.jpg'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100;

export default function Card() {
 return (
  <View style={styles.container}>
    <Tile
    imageSrc={image}
    title="Twitter. It's what's happening"
    imageContainerStyle={{width:screen(47)}}
    contentContainerStyle={{width:screen(47), marginTop: -10}}
    titleStyle={{fontSize:screen(2.7)}}
    width={screen(47)}
    >
  </Tile>
  </View>
 )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: screen(1),
    }
})