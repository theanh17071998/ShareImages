import React from 'react';
import Card from '../Home/Card'
import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native'
const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100;

export default function  (){
    return (
        <ScrollView>
           <View style={styles.lists}>
            <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
           </View>
        </ScrollView>
    )
    
}
const styles = StyleSheet.create({
    lists: {
        display:'flex',
        flexDirection: 'row',
        width: screen(100),
        flexWrap: 'wrap',
        paddingLeft: screen(2),
        paddingRight: screen(2),
        justifyContent: 'space-between',
        marginTop: screen(2)
    }
});
