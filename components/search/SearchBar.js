import { View } from "native-base"

import React, { useState, useEffect } from 'react'
import {  Text, StyleSheet } from 'react-native'
import { Container, Item, Input } from 'native-base';
import { SearchBar, Tile, Header } from 'react-native-elements'

function SearchBart() {
    return (
        <View>
            <View style={styles.containerTitle}>
                <Text style={styles.userName}>Hi, Hoàng Nam!</Text>
            </View>
            <View style={{ flex: 1 }}>
                <SearchBar inputStyle={styles.searchInput}
                    platform='ios'
                    placeholder='Search images'
                />
            </View>
        </View>
    )

}

export default SearchBar