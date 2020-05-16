import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View, Dimensions
} from 'react-native';
import UpdateNews from '../../components/UpdateNews/UpdateNews'
import BikerImage from '../../assets/biker.jpg'
const deviceWidth = Dimensions.get('window').width;

export default class UpdateNewsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Update News',
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

  constructor(props) {
    super(props);
    this.state = {
      "newsList": [
        { "id": 1, "notification": "10 Biker Pins you might like", "img": BikerImage },
        { "id": 2, "notification": "We think you might like this", "img": BikerImage }
      ]
    };
  }

  render() {
    return (
      //const {navigation} = this.props;
      <FlatList
        data={this.state.newsList}
        renderItem={({item}) =>
        <UpdateNews news={item}/>
        }
        keyExtractor={item => `${item.id}`}
        // contentContainerStyle={ styles}
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
