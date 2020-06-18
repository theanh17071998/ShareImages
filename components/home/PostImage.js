import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Picker, TouchableOpacity, Image, Button } from 'react-native'
import MasonryList from "react-native-masonry-list";
import { Card, Header } from 'react-native-elements';
import { API } from '../../constants/api'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { sin, call } from 'react-native-reanimated';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'


const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

const listTagChoice = [
    'Optional tag',
    'tag2',
    'tag3'
]

function PostImage(props) {

    const [selectedValue, setSelectedValue] = useState();
    const [listTag, setListTag] = useState([])
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
                {
                    listTag.map(value => {
                        return (
                            <TouchableOpacity onPress={() => {
                                setListTag((prevListTag) => {
                                    return prevListTag.filter(index => index != value)
                                })
                            }}>
                                <Text style={{ padding: 5, backgroundColor: 'gray', color: 'white', marginRight: 5, borderRadius: 5 }}
                                >
                                    {value}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue)
                    setListTag([...listTag, itemValue])
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