import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
  
    Dimensions
} from 'react-native'
import { Card, Header} from 'react-native-elements'
import ImageViewer from 'react-native-image-zoom-viewer';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon, Button, ListItem, Image, Input } from 'react-native-elements'
import Comments from '../search/comment'

import image from '../../assets/b72e2df60fbc06a54ff1e98cc79a1f7c.jpg'


const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100

function FullScreen(props) {

    const clickBack = () => {
        props.clickBack()
    }

    const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        }
      ]
       
    return (
        <View style={styles.container}>
            <Header
                  leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => {clickBack()}}}
                  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'home', color: '#fff' }}
                  containerStyle={{height: screenHeight(10), marginTop: -10}}
                
            />
            <View>
 
                <ScrollView style={styles.scrollView}>
                 <Card  style={styles.card}
                      image={image}
                      imageStyle= {styles.images}
                      > 
                        <View>
                            {
                                <ListItem
                                  leftAvatar={{ source: { uri: list[0].avatar_url } }}
                                  title={list[0].name}
                                />
                            }
                        </View>
                      <Text style={{marginBottom: 10}}>
                      "Tuổi trẻ đứa nào cũng quan điểm lắm , rồi sóng gió tới tát cho lệch mồm mới hiểu được..." ------ Tác giả : Rose ( Pink )
                      </Text>
                      <View style={styles.btn}>
                      <Button
                        title='Like' 
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: screenWidth(30),  backgroundColor:'red', borderRadius:5}}
                        />
                        
                        <Button
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: screenWidth(30), backgroundColor:'red',  borderRadius:5}}
                        title='Lưu' />
                      </View>
                    </Card>
                    <Input
                        placeholder='Enter your comment'
                        inputContainerStyle={{marginHorizontal: screenWidth(2), paddingLeft: screenWidth(1), marginTop: screenHeight(2)}}
                        rightIcon={{ type: 'font-awesome', name: 'paper-plane'}}
                    />
                    <Comments/>
                </ScrollView>
            </View>
        </View>

    )
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    scrollView: {
        height: screenHeight(90)
    },
    images: {
        height: screenHeight(55)
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-around' 
    }
})

export default FullScreen;

