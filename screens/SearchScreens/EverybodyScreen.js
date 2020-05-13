import React from 'react';
import {
 
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';

export default class Everybody extends React.Component {
    static navigationOptions =  {
        headerShown: false
    };
  render(){
    return (
    <View>
        <Text>Everybody</Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    paddingLeft:14,
    paddingRight: 14,
  },
});
