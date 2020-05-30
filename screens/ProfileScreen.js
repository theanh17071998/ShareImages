import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import Profile from '../components/profile/Profile'
const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth.percent/100;  

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title:'Cá nhân',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265',
        },
    };
  };
  render(){
    return (
        <ScrollView 
            horizontal
        >
          <Profile/>
       </ScrollView>
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
