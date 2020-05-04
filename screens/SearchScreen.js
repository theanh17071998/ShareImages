import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import Search from '../components/Search'
const deviceWidth = Dimensions.get('window').width;

export default class SearchScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title:'Search',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265'
        },
    };
  };
  render(){
    return (
        <ScrollView 
            horizontal
        >
            <Search/>
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
