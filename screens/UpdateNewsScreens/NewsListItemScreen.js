import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View, Dimensions
} from 'react-native';


const deviceWidth = Dimensions.get('window').width;

export default class NewsListItemScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '10 Biker Pins you might like',
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

  

  render() {
    return (
        <View>
            <Text>
                safoiawjsefoipwesnamfkolsdajnfmklsdajfdkoasd
            </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
  },
});
