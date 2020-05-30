import React from 'react';
import {
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import { Tile } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default class Top extends React.Component {
  render(){
    return (
        <View style={styles.container} >
            <Tile 
                height={screen(20)}
                width={screen(47)}
                imageSrc={require('./../../assets/0abe4c2eb9a90433a2e88a36208527e9.jpg')}
                title="Người nổi tiếng"
                featured
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
});
