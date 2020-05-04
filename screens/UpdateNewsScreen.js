import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import UpdateNews from '../components/UpdateNews'
const deviceWidth = Dimensions.get('window').width;

export default class UpdateNewsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title:'Update News',
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
         <UpdateNews/>
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
