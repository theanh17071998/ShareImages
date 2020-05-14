import React from 'react';
import {
  StyleSheet,
  Text,
  View,Dimensions,
  Image
} from 'react-native';
import { ListItem, Button} from 'react-native-elements'

import image from './../../assets/0abe4c2eb9a90433a2e88a36208527e9.jpg'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default class EveryBody extends React.Component {

  render(){
    return (
        <View style={styles.container} >
            <ListItem
        leftAvatar={{ source: image}}
        title={'Thiết kế nội thất'}
        subtitle={'10 người theo dõi'}
        buttonGroupButtons = {['Yes', 'No']}
        bottomDivider
        />
        </View>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingBottom: screen(1),
    paddingLeft: screen(1)
  },
  image: {
    width:screen(47),
    height: screen(30)
  }
});
