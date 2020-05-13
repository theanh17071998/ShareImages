import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Search from '../../components/Searchs/Search';
import SearchNavigator from './SearchNavigator';
import { red } from 'color-name';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

const SearchContainer = createAppContainer(SearchNavigator)

export default class SearchScreen extends React.Component {
  static navigationOptions =  {
    headerShown: false,
    headerTitleStyle: {
      color: 'black',
    },
    };
  render(){
    return (
      <React.Fragment>
        <Search/>
        <SearchContainer theme="light"/>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
});
