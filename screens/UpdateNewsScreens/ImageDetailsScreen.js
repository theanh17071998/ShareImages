import React from "react";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
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
      title: 'react',
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
    const { navigation, news } = this.props;
    console.log(`this.props.navigation' = ${JSON.stringify(this.props.navigation)}`);
    let paramsFromNewsList = this.props.navigation.getParam('noti');
    return (
      <View style={styles.container}>
          {/* <Text>name is: {paramsFromNewsList}</Text> */}
          <Image style={styles.img} source={GirlBiker}/>
      </View>


    );
  }



}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    paddingLeft: 14,
    paddingRight: 14
  },
  img: {
      width: '90%',
      height: 200,
      
  }
});
