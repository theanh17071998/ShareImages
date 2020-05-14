import React from 'react';
import {
 
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';

import EveryBody from './../../components/Searchs/EveryBody'
const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;


export default class Everybody extends React.Component {
  static navigationOptions =  {
    headerShown: false
  };
  render(){
    return (
    <View style={styles.container}>
      <ScrollView>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
       <EveryBody/>
      </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft:screen(1.5),
    paddingRight: screen(1),
  },
});
