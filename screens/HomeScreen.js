import * as React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MasonryList from "react-native-masonry-list";
import { Card, Header} from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100

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

function HomeScreen ({ navigation }) {

  return (
    <View style={styles.container}>
        <Header
                  placement="left"
                  centerComponent={{ text: 'HOME', style: { color: '#000', fontSize: 18, fontWeight: '700'}}}
                  containerStyle={{height: screenHeight(10), marginTop: -10,  backgroundColor: '#fff', borderBottomWidth: 2}}
                  rightComponent={{ icon: 'add-circle-outline', color: '#000', borderRadius: '50%'}}
            />
      <MasonryList
        columns={2}
        sorted={true}
        // onPressImage={this.onPressImage}
        images={data}
        imageContainerStyle={styles.imgContainer}
        listContainerStyle={styles.listContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgContainer: {
    borderRadius: 15,
    marginLeft: screenWidth(2),
    width: screenWidth(46),
    marginVertical: screenWidth(3)
  }
});

export default HomeScreen