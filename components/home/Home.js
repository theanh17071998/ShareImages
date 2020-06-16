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
import Masonry from 'react-native-masonry';
import MasonryList from "react-native-masonry-list";

const deviceWidth = Dimensions.get("window").width;
const screen = (percent) => percent * deviceWidth / 100;

const data = [
  {
    uri: "https://i.pinimg.com/236x/bb/ff/b9/bbffb9f400aeb9300d29b1a7aeb23edc.jpg"
},
  {
    uri: "https://vnn-imgs-f.vgcloud.vn/2018/03/08/16/nu-phuot-thu-7.jpg"
},
  {
    uri: "https://motosaigon.vn/wp-content/uploads/2016/12/959-Panigale-Ducati-nu-biker-iron-man-motosaigon-4.jpg"
},
  {
    uri: "https://motosaigon.vn/wp-content/uploads/2019/07/nu-biker-cuoi-ducati-panigale-v4-iron-man-motosaigon-1-1.jpg"
},
  {
    uri: "https://media.gettyimages.com/photos/portrait-of-mature-male-motorcyclist-on-arid-plain-cagliari-sardinia-picture-id521980023?s=612x612"
},
  {
    uri: "https://vnn-imgs-f.vgcloud.vn/2018/03/08/16/nu-phuot-thu-3.jpg"
},
  {
    uri: "https://vnn-imgs-f.vgcloud.vn/2018/04/15/16/dan-hotgirl-xinh-dep-do-dang-cung-hang-ngan-mo-to-khung.jpg"
},
  {
    uri: "https://caphemoingay.com/wp-content/uploads/iamges/2020/01/10/349350708403.jpg"
},
  {
    uri: "https://pro-biker.vn/image/cache/data/bao-tay/Bao-tay-probiker-dai-den-3-800x800.jpg"
},
  {
    uri: "https://media.sohuutritue.net.vn/resize/500x333/files/huongmi/2018/03/08/doan-trang-1203.jpeg"
},
  {
    uri: "../../assets/biker.jpg"
}
];
export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "black",
        marginLeft: screen(20)

      },
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "white",
      },
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>home</Text>
        <MasonryList
          columns={2}
          sorted={true}
          images={data}
          imageContainerStyle={styles.imgContainer}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  imgContainer: {
    borderRadius: 15,
    marginLeft: screen(3),
    width: screen(45),
    marginVertical: screen(3)
  }
});

