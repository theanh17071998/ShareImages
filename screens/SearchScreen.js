import * as React from 'react'
import { Button, View, Text } from 'react-native'
import Search from '../components/search/index'

function SearchScreen({ navigation }) {
  return (
      <View>
        <Search navigation={navigation}/>
      </View>
  )
}

export default SearchScreen