import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import NewsListItemScreen from '../../screens/NotificationScreens/NewsListItemScreen'
import { FlatList } from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
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
export default function Notification(props) {
    const { news, onPress } = props;
    return (
        <View>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <View style={styles.content}>
                    <Text style={styles.imgText}>{news.notification}</Text>
                    <Text style={styles.imgTime}>19 giờ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={data[0]}></Image>
                    <Image style={styles.img} source={data[1]}></Image>
                    <Image style={styles.img} source={data[2]}></Image>
                    {/* <FlatList 
                        data
                    /> */}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: '#006265',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        marginBottom: 30,
        borderWidth: 0
    },
    content: {
        marginVertical: 10
    },
    imgText: {
        fontSize: 17,
        marginLeft: 15,
        // marginBottom: 15
    },
    imgTime: {
        fontWeight: "200",
        marginLeft: 15,
        fontSize: screen(4)
    },
    imgContainer: {
        flexDirection: 'row',
        //width: '100%',
        justifyContent: 'center'
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10
    },
    img: {
        height: 150,
        width: '30%',
        marginHorizontal: 1,
        borderRadius: 10
    }
});
