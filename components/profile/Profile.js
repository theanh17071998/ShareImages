import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import { Avatar, Text} from 'react-native-elements';
import Search from '../profile/SearchBar';

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
        <View>
            <Search/>
        </View>
        </View>
       
    )
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: screen(100)
    }
});
