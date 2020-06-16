import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    ImageBackground,
    Dimensions,
    Animated
} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function FullScreen(props) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{
                    width: windowWidth, height: 50,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: '#dddddd',
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 1
                }}>
                    <View style={{ marginTop: 7 }}>
                        <Icon name='chevron-left' size={30} />
                    </View>
                </View>
                <ScrollView style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }} scrollEventThrottle={16}>
                    <View>
                        <Image
                            source={require('../../assets/image4.jpg')}
                            style={{
                                alignSelf: 'center',
                                width: windowWidth,
                                borderWidth: 1,
                            }}
                            resizeMode="cover"
                        />
                        <Text>sdasd</Text>
                    </View>
                </ScrollView>
            </View>
        </View>

    )
}

var styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: 'white'
    }
})

export default FullScreen;

