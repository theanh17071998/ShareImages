import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateNewsScreen from './screens/UpdateNewsScreens/UpdateNewsScreen'

import HomeIcon from './assets/home-run.png'
import NewsListItemScreen from './screens/UpdateNewsScreens/NewsListItemScreen'
import ImageDetailsScreen from './screens/UpdateNewsScreens/ImageDetailsScreen'

const HomeStack = createStackNavigator({
    HomeScreen
})
HomeStack.navigationOptions = {
 tabBarLabel:'Home',
    drawerIcon: () => (
      <Image
        source={HomeIcon}
      />
    )
}
const SearchStack = createStackNavigator({
    SearchScreen
})
SearchStack.navigationOptions = {
    tabBarLabel:'Seacrh'
   }
const ProfileStack = createStackNavigator({
    ProfileScreen
})
ProfileStack.navigationOptions = {
  tabBarLabel:'Profile'
 }
const UpdateNewsStack = createStackNavigator({
  UpdateNewsScreen,
  NewsListItemScreen,
  ImageDetailsScreen
})
// UpdateNewsScreen.navigationOptions = {
//   tabBarLabel: 'Update News'
// }

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ProfileStack,
    UpdateNewsStack
})

export default AppNavigator;