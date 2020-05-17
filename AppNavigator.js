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
  UpdateNewsScreen: UpdateNewsScreen,
  NewsListItemScreen: NewsListItemScreen
})
// UpdateNewsScreen.navigationOptions = {
//   tabBarLabel: 'Update'
// }

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ProfileStack,
    UpdateNewsStack
})

export default AppNavigator;