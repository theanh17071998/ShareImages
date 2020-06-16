import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, ScrollView, ImageBackground } from 'react-native'
import { Container, Header, Item, Input } from 'native-base';
import { SearchBar, Tile } from 'react-native-elements'
import { exp, block } from 'react-native-reanimated'
import { } from 'react-native-vector-icons/Ionicons'


function Topic(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={props.imageUrl}
                style={styles.topic}
                imageStyle={{ borderRadius: 10 }}
            >
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    flex: 1

                }}>
                    <Text style={styles.topicTitle}>{props.name}</Text>
                </View>
            </ImageBackground>

        </View>

    )
}

var styles = StyleSheet.create({
    topic: {
        flex: 1,
        resizeMode: 'cover',
        
    },
    topicTitle: {
        color: 'white',
        fontWeight: '700'
    },
    container: {
        flex: 2, 
        justifyContent: 'center', 
        height: 130, 
        marginLeft: 10,
        width: 90
    }
})

export default Topic;