import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateNewsScreen from './screens/UpdateNewsScreen'

import HomeIcon from './assets/home-run.png'

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
    UpdateNewsScreen
})
UpdateNewsStack.navigationOptions = {
  tabBarLabel:'Update News'
 }

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ProfileStack,
    UpdateNewsStack
})

export default AppNavigator;