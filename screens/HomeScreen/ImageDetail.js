import React from 'react';
import {
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';


const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default function ImageDetail (){
    return (
        <View style={styles.container} >
            <Text>Image Detail</Text>
        </View>
    );
 
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingBottom: screen(1),
    paddingLeft: screen(1)
  },

});
