import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import NewsListItemScreen from '../../screens/UpdateNewsScreens/NewsListItemScreen'

export default function UpdateNews(props) {
    const { news, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.imgText}>{news.notification}</Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={news.img}></Image>
                    <Image style={styles.img} source={news.img}></Image>
                    <Image style={styles.img} source={news.img}></Image>
                </View>
                
            </View>
        </TouchableOpacity>
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
    imgContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10
    },
    imgText: {
        fontSize: 17,
        marginLeft: 15,
        marginBottom: 15
    },
    img: {
        height: 150,
        width: '30%',
        marginHorizontal: 1,
        borderRadius: 10
    }
});
