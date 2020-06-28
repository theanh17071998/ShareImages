import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, AsyncStorage, Dimensions } from 'react-native'
import { Container, Header, Item, Input } from 'native-base';
import { SearchBar, Tile } from 'react-native-elements'
import { exp, block } from 'react-native-reanimated'
import Topic from './Topic'
import GridImage from './GridImage'
import FullScreen from './FullScreen'
import { API } from '../../constants/api'
import { postMethod, jsonHeader } from '../../constants/fetchTool'
import UserContext from '../../contexts/UserContext'

function Search(props) {

    const [clickedImage, setClick] = useState(false)
    const [objectImage, setObjectImage] = useState()
    const [user, setUser] = useState({})
    const { height, width } = Dimensions.get('window')
    const [clickback, setClickBack] = useState(false)
    const { socket } = useContext(UserContext)

    function getImagesByTag(tag) {
        socket.emit('clientClickSearchTag', {
            to: user.userName,
            tag: tag
        })
    }

    const listenClickImage = (object) => {
        setObjectImage(object)
        setClick(true)
        console.log(object)
    }

    const listenClickBack =  () => {
        setClickBack(true)
        setClick(false)
    }

    useEffect(() => {
        AsyncStorage.getItem('user').then((userTemp) => {
            if (userTemp) {
                setUser(JSON.parse(userTemp))
                socket.emit('clientJoinRoom', JSON.parse(userTemp).userName)
            }
        })
    }, [])

    return (
        clickedImage == false ? (
    
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.containerTitle}>
                    <Text style={styles.userName}>Hi, Hoàng Nam!</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <SearchBar inputStyle={styles.searchInput}
                        platform='ios'
                        placeholder='Search images'
                    />
                </View>
                <ScrollView
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{
                        flex: 1,
                        paddingTop: 20
                    }}>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>
                            What can we help you find?
                    </Text>

                        <View style={styles.topicContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity
                                    onPress={ () => { getImagesByTag('tinh-yeu') } }
                                >
                                    <Topic imageUrl={require('../../assets/tinh-yeu.jpg')} name='Tình Yêu' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={ () => { getImagesByTag('tre-con') } }
                                >
                                    <Topic imageUrl={require('../../assets/tre-con.jpg')} name='Trẻ Con' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={ () => { getImagesByTag('naruto') } }
                                >
                                    <Topic imageUrl={require('../../assets/naruto.jpg')} name='Naruto' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={ () => { getImagesByTag('sasuke') } }
                                >
                                    <Topic imageUrl={require('../../assets/sasuke.png')} name='Sasuke' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={ () => { getImagesByTag('nam-dep-trai') } }
                                >
                                    <Topic imageUrl={require('../../assets/trai-dep.jpg')} name='Trai Đẹp' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={ () => { getImagesByTag('gai-xinh') } }
                                >
                                    <Topic imageUrl={require('../../assets/girl_biker.jpg')} name='Gái Xinh' />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
                <GridImage click={listenClickImage} clickBack={listenClickBack} />
            </ScrollView>
        ) : (
                <FullScreen clickBack={listenClickBack} image={objectImage} navigation={props.navigation} />
            )

    )
}

var styles = StyleSheet.create({
    userName: {
        fontWeight: 'bold',
        fontSize: 30
    },
    containerTitle: {
        flex: 1,
        alignContent: "center",
        alignContent: 'center'
    },
    searchInput: {

    },
    container: {
        paddingBottom: 20, 
        paddingLeft: 20,
        paddingRight: 20
    },
    topicContainer: {
        height: 130,
        marginTop: 20,
    },
    searchResult: {
        marginTop: 30,

    },
    parent: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    child: {
        width: '45%',
        margin: '1%',
        aspectRatio: 1,
    }
})

export default Search;