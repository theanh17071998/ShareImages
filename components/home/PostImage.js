import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, Picker, TouchableOpacity, Image, Button } from 'react-native'
import MasonryList from "react-native-masonry-list";
import { Card, Header } from 'react-native-elements';
import { API } from '../../constants/api'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { showMessage, hideMessage } from "react-native-flash-message";
import { sin, call } from 'react-native-reanimated';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'
import UserContext from '../../contexts/UserContext'


const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

const listTagChoice = [
    'tinh-yeu',
    'tre-con',
    'naruto',
    'sasuke',
    'nam-dep-trai',
    'gai-xinh',
]

function PostImage(props) {

    const [selectedValue, setSelectedValue] = useState();
    const { socket } = useContext(UserContext)
    const [listTag, setListTag] = useState('naruto')
    const [title, setTitle] = useState()
    const [srcImage, setSrcImage] = useState('https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png')

    useEffect(() => {
        (async () => {
            if (Constants.platform.ios) {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!')
                }
            }
        })()
    })

    function createImage () {
        fetch(API.CREATE_IMAGE, {
            headers: jsonHeader.headers,
            method: postMethod.method,
            body: JSON.stringify({
                token: props.user.token,
                tags: listTag,
                title: title,
                uri: srcImage
            })
            }).then(response => response.json())
            .then((res) => {
                if (res.code == 200) {
                    socket.emit('clientClickNotify', {
                        imageId: res.data.image._id,
                        to: props.user.userName
                    })
                    showMessage({   
                        message: 'Thông báo',
                        description: 'Lưu thành công',
                        type: "success",
                    });
                    props.navigation.jumpTo('Home')
                } else {
                    console.log('ERROR')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })

        result.uri ? setSrcImage(result.uri) : console.log('Cancel')
        if (!result.cancelled) {
            setImage(result.uri)
        }
        console.log(result);
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'chevron-left', color: 'black', onPress: props.back }}
                containerStyle={{ height: screenHeight(10), marginTop: -10, backgroundColor: '#fff', borderBottomWidth: 2 }}
                centerComponent={{
                    text: 'POST IMAGE', style: {
                        color: '#000', fontFamily: 'monospace', fontWeight: 'bold',
                        textShadowColor: 'black'
                    }
                }}
            />
            <Input
                placeholder="Title"
                style={styles}
                onChangeText={value => setTitle(value)}
            />
            <View style={{ flexDirection: 'row', padding: 5 }}>
                <Text style={{ padding: 5, backgroundColor: 'gray', color: 'white', marginRight: 5, borderRadius: 5 }}
                >
                    {listTag}
                </Text>
            </View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue)
                    setListTag(itemValue)
                }}
            >
                {
                    listTagChoice.map(value => {
                        return (
                            <Picker.Item label={value} value={value} />
                        )
                    })
                }
            </Picker>
            <View>
                <TouchableOpacity onPress={pickImage} style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                    <Ionicons name='ios-add' size={24} style={{ paddingRight: 5, paddingTop: 3 }} />
                    <Ionicons name='ios-image' size={32} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={pickImage} style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                <Button
                    onPress={ () => createImage() }
                    title="Đăng ảnh"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: screenHeight(100)
    },
    imgContainer: {
        borderRadius: 15,
        marginLeft: screenWidth(3),
        width: screenWidth(45),
        marginVertical: screenWidth(3)
    }
});

export default PostImage