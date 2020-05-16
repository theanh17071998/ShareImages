import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class NewsListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text>Pins for you</Text>
                    <Image source={}></Image>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,

    }
})