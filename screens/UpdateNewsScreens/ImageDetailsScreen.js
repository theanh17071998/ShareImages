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


 

  render() {
    const { navigation } = this.props;
    return (
      <View>
          <Image style={styles.img} source={BikerImage}/>
      </View>


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
  img: {
      width: '100%',
      height: '100%'
  }
});
