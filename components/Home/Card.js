import React from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity}from 'react-native'
import { Tile } from 'react-native-elements';


const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100;

export default function Card (props) {
  
 const {title, uri, onPress} = props
 
 return (

  <TouchableOpacity 
  activeOpacity={0.5} 
  onPress={onPress}
  >
    <View style={styles.container}>
      <Tile
        imageSrc={uri}
        title={title}
        imageContainerStyle={{width:screen(47)}}
        contentContainerStyle={{width:screen(47), marginTop: -10}}
        titleStyle={{fontSize:screen(2.7), paddingLeft: screen(0)}}
        width={screen(47)}
      >
    </Tile>
  </View>
  </TouchableOpacity>
 )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: screen(0.1),
        paddingLeft: screen(2)
    }
})