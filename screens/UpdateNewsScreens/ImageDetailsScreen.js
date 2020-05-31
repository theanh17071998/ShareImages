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
import BikerImage from '../../assets/biker.jpg'

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
