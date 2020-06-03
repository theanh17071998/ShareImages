import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View, Dimensions, Button
} from 'react-native';
import Notification from '../../components/Notification/Notification'
import BikerImage from '../../assets/biker.jpg'
import GirlBiker from '../../assets/girl_biker.jpg';
import Suzuki from '../../assets/suzuki.jpg';

const deviceWidth = Dimensions.get('window').width;

export default class NotificationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Thông báo',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'black',
      },
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white',
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      "newsList": [
        { "id": 1, "notification": "10 Biker Pins you might like", "img": BikerImage },
        { "id": 2, "notification": "We think you might like this", "img": GirlBiker },
        { "id": 3, "notification": "14 trending Pins about Vehicle", "img": Suzuki },
        { "id": 4, "notification": "You might like this Pins", "img": BikerImage }
      ]
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <FlatList 
        data={this.state.newsList}
        renderItem={({item}) =>
          <Notification news={item} onPress={() => navigation.navigate('NewsListItemScreen', {notificationTitle: item.notification}) }/>
        }
        keyExtractor={item => `${item.id}`}
      />
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
