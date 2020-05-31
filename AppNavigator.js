import * as React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen/HomeScreen'
import ImageDetail from './screens/HomeScreen/ImageDetail'
import SearchScreen from './screens/SearchScreens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateNewsScreen from './screens/NotificationScreens/NotificationScreen'
import NewsListItemScreen from './screens/NotificationScreens/NewsListItemScreen'
import ImageDetailsScreen from './screens/NotificationScreens/ImageDetailsScreen'

import HomeIcon from './assets/home-run.png'
import UserIcon from './assets/user.png'
import SearchIcon from './assets/search.png'
import NotiIcon from './assets/notification.png'

const HomeStack = createStackNavigator({
    HomeScreen,
    ImageDetail
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
const NotificationStack = createStackNavigator({
  UpdateNewsScreen,
  NewsListItemScreen,
  ImageDetailsScreen
})
NotificationStack.navigationOptions = {
  tabBarLabel:'Notification',
  tabBarIcon: tabInfo => {
    return <Image style={{width:25, height:25}} source={NotiIcon}/>
  },
 }

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ProfileStack,
    NotificationStack
})

export default AppNavigator;