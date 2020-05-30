import * as React from 'react';
import {Dimensions} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TopScreen from './TopScreen';
import YourScreen from './YourScreen'
import EverybodyScreen from './EverybodyScreen'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

const TopStack = createStackNavigator({
    TopScreen
})
TopStack.navigationOptions = {
  tabBarLabel: 'Hàng đầu',
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor:'#a3a3a3',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          width: screen(96),
          marginLeft: screen(2),
        },
        indicatorStyle: { backgroundColor: 'black'}
      }
   }
const YourStack = createStackNavigator({
    YourScreen
})
YourStack.navigationOptions = {
    tabBarLabel: 'Của bạn',
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor:'#a3a3a3',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          width: screen(96),
          marginLeft: screen(2),
        },
        indicatorStyle: { backgroundColor: 'black'}
      }
   }
const EverybodyStack = createStackNavigator({
    EverybodyScreen
})
EverybodyStack.navigationOptions = {
  tabBarLabel: 'Mọi người',
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor:'#a3a3a3',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          width: screen(96),
          marginLeft: screen(2),
        },
        indicatorStyle: { backgroundColor: 'black'}
      }
   }
const AppNavigator = createMaterialTopTabNavigator({
   TopStack,
   YourStack,
   EverybodyStack
})

export default AppNavigator;