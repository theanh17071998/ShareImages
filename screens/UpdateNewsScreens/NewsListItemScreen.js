import React from "react";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import Masonry from 'react-native-masonry-layout';
import BikerImage from '../../assets/biker.jpg'

import GirlBiker from '../../assets/girl_biker.jpg';
import Suzuki from '../../assets/suzuki.jpg';
import NewsListItem from '../../components/UpdateNews/NewsListItem';

const deviceWidth = Dimensions.get("window").width;

export default class NewsListItemScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("notificationTitle"),
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#006265",
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
    const { navigation } = this.props;
    let dataSendToDetails = {
      name: "Kvz"
    }
    return (
      <View>
        <FlatList
          data={this.state.newsList}
          //numColumns={2}
          renderItem={({ item }) =>
            <NewsListItem listnews={item} onPress={() => this.props.navigation.navigate('ImageDetailsScreen', {noti:item.id})} />
          }
          keyExtractor={item => `${item.id}`}
        // contentContainerStyle={ styles}
        />
      </View>



      // <Masonry
      //   ref="masonry"
      //   columns={3} // optional - Default: 2
      //   renderItem={(item) => <View>
      //     <Text>some text</Text>
      //   </View>}
      // />


    );
  }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingLeft: 14,
    paddingRight: 14,
  },
});
