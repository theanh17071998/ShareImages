import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import SearchBar from './SearchBar'
const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;
export default function Search (){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
             <SearchBar/>
             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        width: screen(96),
        marginLeft: screen(2),
        marginTop: screen(7)
    }
});
