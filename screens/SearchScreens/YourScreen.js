import React from 'react';
import {
 
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import Your from './../../components/Searchs/Your'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default class YourScreen extends React.Component {
    static navigationOptions =  {
        headerShown: false
    };
  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.title} >
        Lượt lưu gần đây
      </Text>
      <View style={styles.content}>
       <Your/>
       <Your/>
       <Your/>
       <Your/>
       <Your/>
       <Your/>
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
