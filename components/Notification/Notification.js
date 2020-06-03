import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import NewsListItemScreen from '../../screens/NotificationScreens/NewsListItemScreen'
import { FlatList } from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100;

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
                    <Image style={styles.img} source={news.img}></Image>
                    <Image style={styles.img} source={news.img}></Image>
                    <Image style={styles.img} source={news.img}></Image>
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
