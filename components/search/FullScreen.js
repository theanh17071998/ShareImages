import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,

    Dimensions
} from 'react-native'
import { Card, Header, Input } from 'react-native-elements'
import ImageViewer from 'react-native-image-zoom-viewer';
import { ScrollView } from 'react-native-gesture-handler'
import { Icon, Button, ListItem } from 'react-native-elements'
import Comments from '../search/comment'
import { API } from '../../constants/api'
import { AsyncStorage } from 'react-native'
import image from '../../assets/b72e2df60fbc06a54ff1e98cc79a1f7c.jpg'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool';


const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

function FullScreen(props) {

    const clickBack = () => {
        props.clickBack()
    }
    const [comment, setComment] = useState('')

    const likeImage = () => {
        AsyncStorage.getItem('user').then((userTemp) => {
            console.log(JSON.parse(userTemp).token)
            console.log(props.image.listUserLike)
            if (userTemp) {
            fetch(API.LIKE_IMAGE + props.image._id + '/like', {
                headers: jsonHeader.headers,
                method: postMethod.method,
                body: JSON.stringify({
                    token: JSON.parse(userTemp).token
                })
            }).then(response => response.json())
                .then((res) => {
                    if (res.code == 200) {
                        console.log(res)

                    }
                })
                .catch((err) => {
                    console.log(err)

                })
            }
        })
    }

    const commentSubmit = () => {
        console.log(props.image._id)

        AsyncStorage.getItem('user').then((userTemp) => {
            if (userTemp) {

                fetch(API.COMMENT, {
                    headers: jsonHeader.headers,
                    method: postMethod.method,
                    body: JSON.stringify({
                        imageId: props.image._id,
                        token: JSON.parse(userTemp).token,
                        content: comment
                    })
                }).then(response => response.json())
                    .then((res) => {
                        console.log(res)
                        if (res.code == 200) {

                        }
                    })
                    .catch((err) => {
                        console.log(err)

                    })
            }
        })
    }

    return (

        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'chevron-left', color: 'black', onPress: () => { clickBack() } }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'share', color: 'black' }}
                containerStyle={{ height: screenHeight(10), marginTop: -10, backgroundColor: '#fff' }}
            />
            <View>

                <ScrollView style={styles.scrollView}>
                    <Card style={styles.card}
                        image={props.image}
                        imageStyle={styles.images}
                    >
                        <View>
                            {
                                <ListItem
                                    leftAvatar={{ source: { uri: props.image.user.avatarUrl } }}
                                    title={props.image.user.userName}
                                />
                            }
                        </View>
                        <Text style={{ marginBottom: 10 }}>
                            {props.image.title}
                        </Text>
                        <View style={styles.btn}>
                            <Button
                                title={'Like' + '   ' + props.image.listUserLike.length}
                                buttonStyle={{
                                    borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: screenWidth(30), backgroundColor: 'red', borderRadius: 5,
                                }}
                                onPress={() => { likeImage() }}
                            />

                            <Button
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: screenWidth(30), backgroundColor: 'red', borderRadius: 5 }}
                                title='Lưu' />
                        </View>
                    </Card>
                    <Input
                        placeholder='Enter your comment'
                        inputContainerStyle={{ marginHorizontal: screenWidth(2), paddingLeft: screenWidth(1), marginTop: screenHeight(2) }}
                        rightIcon={{
                            type: 'font-awesome', name: 'paper-plane', onPress: () => {
                                commentSubmit()
                            }
                        }}
                        onChangeText={(e) => {
                            setComment(e)
                        }}
                    />
                    <Comments imageid={props.image._id} />
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

