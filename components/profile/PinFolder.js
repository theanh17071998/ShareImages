import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet} from 'react-native'
import { Tile } from 'react-native-elements';

import image  from '../../assets/avatar.jpg'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100

export default function PinFolder() {
  return (
   <View style={styles.container}>
        <Tile
    imageSrc={image}
    title="Sách"
    featured
    caption="Thể loại sách yêu thích"
    width={screen(47)}
    />
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: screen(2),
    }
})