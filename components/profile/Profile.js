import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import { Avatar, Text} from 'react-native-elements';
import Search from '../profile/SearchBar';
import PinFolder from '../profile/PinFolder'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent*deviceWidth/100;

export default function Profile (){
    return (
        <View>
        <View style={styles.container}>
           <View>
                <Text h3>Nguyen The Anh</Text>
                <Text>0 người theo dõi</Text>
                <Text>10 người đang theo dõi</Text>
           </View>
           <View>
           <Avatar
        rounded
        size="large"
        source={{
            uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        />
           </View>
       </View>
       <View style={styles.line}>

       </View>
        <View style={styles.search}>
            <Search/>
        </View>
        <View>
        <PinFolder/>
        </View>

        </View>
       
    )
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: screen(100),
      paddingLeft: screen(2),
      paddingRight: screen(2),
      marginTop: screen(2)
    },
    search: {
        marginTop: screen(3),
        width:screen(98),
        paddingLeft: screen(2)
    },
    line: {
        height:1,
        backgroundColor: '#000',
        width: screen(50),
        marginLeft: screen(25),
        marginTop: screen(3)
    }
});
