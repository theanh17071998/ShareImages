import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateNewsScreen from './screens/UpdateNewsScreen'

import HomeIcon from './assets/home-run.png'
import UserIcon from './assets/user.png'
import SearchIcon from './assets/search.png'
import NotiIcon from './assets/notification.png'

const HomeStack = createStackNavigator({
    HomeScreen
})
HomeStack.navigationOptions = {
 tabBarLabel:'Home',
 tabBarIcon: tabInfo => {
  return <Image style={{width:25, height:25}} source={HomeIcon}/>
},
}
const SearchStack = createStackNavigator({
    SearchScreen
})
SearchStack.navigationOptions = {
    tabBarLabel:'Seacrh',
    tabBarIcon: tabInfo => {
      return <Image style={{width:25, height:25}} source={SearchIcon}/>
    },
   }
const ProfileStack = createStackNavigator({
    ProfileScreen
})
ProfileStack.navigationOptions = {
  tabBarLabel:'Profile',
  tabBarIcon: tabInfo => {
    return <Image style={{width:30, height:30}} source={UserIcon}/>
  },
 }
 const UpdateNewsStack = createStackNavigator({
    UpdateNewsScreen
})
UpdateNewsStack.navigationOptions = {
  tabBarLabel:'Notification',
  tabBarIcon: tabInfo => {
    return <Image style={{width:25, height:25}} source={NotiIcon}/>
  },
 }

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ProfileStack,
    UpdateNewsStack
})

export default AppNavigator;