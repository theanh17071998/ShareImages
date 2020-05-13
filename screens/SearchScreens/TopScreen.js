import React from 'react';
import {
  StyleSheet,
  Text, 
  View
} from 'react-native';

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
    <View>
        <Text>TopScreen</Text>
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
