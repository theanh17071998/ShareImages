import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateNewsScreen from './screens/UpdateNewsScreens/UpdateNewsScreen'

import HomeIcon from './assets/home-run.png'
<<<<<<< HEAD
import UserIcon from './assets/user.png'
import SearchIcon from './assets/search.png'
import NotiIcon from './assets/notification.png'
=======
import NewsListItemScreen from './screens/UpdateNewsScreens/NewsListItemScreen'
import ImageDetailsScreen from './screens/UpdateNewsScreens/ImageDetailsScreen'
>>>>>>> c49e658c3351ebb4a755c102054281d6150def46

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
  UpdateNewsScreen,
  NewsListItemScreen,
  ImageDetailsScreen
})
<<<<<<< HEAD
UpdateNewsStack.navigationOptions = {
  tabBarLabel:'Notification',
  tabBarIcon: tabInfo => {
    return <Image style={{width:25, height:25}} source={NotiIcon}/>
  },
 }
=======
// UpdateNewsScreen.navigationOptions = {
//   tabBarLabel: 'Update News'
// }
>>>>>>> c49e658c3351ebb4a755c102054281d6150def46

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ProfileStack,
    UpdateNewsStack
})

export default AppNavigator;