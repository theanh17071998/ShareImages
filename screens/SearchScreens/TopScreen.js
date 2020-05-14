import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Dimensions
} from 'react-native';

import Top from '../../components/Searchs/Top'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default class TopScreen extends React.Component {
    static navigationOptions =  {
        headerShown: false,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'blue',
            },
          }
    };
    
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.title} >
        Ý tưởng dành cho bạn
      </Text>
      <View style={styles.content}>
        <Top/>
        <Top/>
        <Top/>
        <Top/>
        <Top/>
        <Top/>
        <Top/>
        <Top/>
      </View>
       
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft:screen(1.5),
    paddingRight: screen(1),
  },
  content: {
    flex:1,
    width: screen(97),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    paddingLeft: screen(1),
    marginTop: screen(4),
    marginBottom: screen(2),
    fontSize: 17
  }
});
