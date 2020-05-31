import React from 'react';
import Card from '../../components/Home/Card'
import {
    
    View,
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native'
const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100;

const images = [
    {
      id: '1',
      title: 'Girl Hàn Quốc',
      uri: require('../../assets/2eafd564152f02bc2db7363c60a47a56.jpg')
    },
    {
      id: '2',
      title: 'Việt Nam',
      uri: require('../../assets/image1.jpg')
    },
    {
      id: '3',
      title: 'Mỹ',
      uri: require('../../assets/image2.jpg')
    },
    {
      id: '4',
      title: 'Hàn Quốc',
      uri: require('../../assets/image3.jpg')
    },
    {
      id: '5',
      title: 'Việt Nam',
      uri: require('../../assets/image4.jpg')
    },
    {
      id: '6',
      title: 'Việt Nam',
      uri: require('../../assets/image5.jpg')
    },
    {
        id: '7',
        title: 'Girl Hàn Quốc',
        uri: require('../../assets/2eafd564152f02bc2db7363c60a47a56.jpg')
      },
      {
        id: '8',
        title: 'Việt Nam',
        uri: require('../../assets/image1.jpg')
      },
      {
        id: '9',
        title: 'Mỹ',
        uri: require('../../assets/image2.jpg')
      },
      {
        id: '10',
        title: 'Hàn Quốc',
        uri: require('../../assets/image3.jpg')
      },
      {
        id: '11',
        title: 'Việt Nam',
        uri: require('../../assets/image4.jpg')
      },
      {
        id: '12',
        title: 'Việt Nam',
        uri: require('../../assets/image5.jpg')
      }
  ]
  
export default class HomeScreen extends React.Component{
  static navigationOptions = ({navigation}) => {
    return {
        title:'Home',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265',
        },
    };
  };
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
            <FlatList
            data={images}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Card title={item.title} uri={item.uri} onPress={()=> {navigation.navigate('ImageDetail'); }}/>}
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: screen(2)
    },
    lists: {
        display:'flex',
        flexDirection: 'row',
        width: screen(100),
        flexWrap: 'wrap',
        paddingLeft: screen(0),
        paddingRight: screen(2),
        justifyContent: 'space-between',
        marginTop: screen(2)
    }
});
