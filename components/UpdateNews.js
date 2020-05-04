import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default function UpdateNews (){
    return (
        <TouchableOpacity activeOpacity={0.5}>
          <View><Text>UpdateNews</Text></View>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 40,
        elevation: 3,
        backgroundColor:'#006265',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 10,
        marginBottom: 30,
        borderWidth: 0
    }
});
