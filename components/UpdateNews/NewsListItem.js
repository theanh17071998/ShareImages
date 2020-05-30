import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function NewsListItem(props) {

    const { news, onPress } = props;
    return (
        // <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        //     <View style={styles.content}>
                

        //     </View>
        // </TouchableOpacity>
        <View style={styles.imgContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.img} source={news.img}></Image>
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
        borderWidth: 0,
        backgroundColor: 'red'
    },
    imgContainer: {
        //flexDirection: 'column',
        // flex: 1,
        width: '100%',
        //justifyContent: 'center'
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10
    },
    img: {
        height: 150,
        width: '50%',
        marginTop: 5,
        borderRadius: 10
    }
});
