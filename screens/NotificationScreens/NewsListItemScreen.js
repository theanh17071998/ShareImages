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

import BikerImage from '../../assets/biker.jpg'

import GirlBiker from '../../assets/girl_biker.jpg';
import Suzuki from '../../assets/suzuki.jpg';
import NewsListItem from '../../components/Notification/NewsListItem';

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
    uri: "https://www.gamemaps.com/img/game_icons/gtavc.jpg"
}
];
export default class NewsListItemScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("notificationTitle"),
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


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     "newsList": [
  //       { "id": 1, "notification": "10 Biker Pins you might like", "img": BikerImage },
  //       { "id": 2, "notification": "We think you might like this", "img": GirlBiker },
  //       { "id": 3, "notification": "14 trending Pins about Vehicle", "img": Suzuki },
  //       { "id": 4, "notification": "You might like this Pins", "img": BikerImage }

  //     ]
  //   };
  // }
  // onPressImage = value => {
  //   console.warn(value);
  // };
  // render() {
  //   const { navigation } = this.props;
  //   let dataSendToDetails = {
  //     name: "Kvz"
  //   }
  //   return (
  //     // <View>
  //     //   <FlatList
  //     //     data={this.state.newsList}
  //     //     //numColumns={2}
  //     //     renderItem={({ item }) =>
  //     //       <NewsListItem listnews={item} onPress={() => this.props.navigation.navigate('ImageDetailsScreen', { noti: item.id })} />
  //     //     }
  //     //     keyExtractor={item => `${item.id}`}
  //     //   // contentContainerStyle={ styles}
  //     //   />
  //     // </View>



  //       <Masonry
  //         // ref="masonry"
  //         columns={2} // optional - Default: 2
  //         bricks={[ BikerImage, GirlBiker, Suzuki ]}
  //         renderItem={(item) => <View>

  //         </View>}
  //       />




  //   );
  // addMoreImages(newImages) {
  //   this.setState({
  //     images: this.setState.images.concat(newImages)
  //   });
  // }
  // onPressImage = value => {
  //   console.warn(value);
  // };
  render() {
    return (
      <View style={styles.container}>
        <MasonryList
          columns={2}
          sorted={true}
          onPressImage={this.onPressImage}
          // containerWidth={300}
          images={data}
          imageContainerStyle={styles.imgContainer}
          listContainerStyle={styles.listContainer}
        // renderer={({ data }) => {
        //   return <Text>{data.title}</Text>;
        // }}
        />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgContainer: {
    borderRadius: 15,
    marginLeft: screen(3),
    width: screen(45),
    marginVertical: screen(3)
  }
});
