import * as React from 'react';
import {Dimensions} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../../screens/HomeScreen';
import Home from './Home';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

const HomeStack = createStackNavigator({
    HomeScreen
})
HomeStack.navigationOptions = {
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
const HomesStack = createStackNavigator({
    Home
})
HomesStack.navigationOptions = {
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
const AppNavigator = createMaterialTopTabNavigator({
   HomeStack,
   HomesStack
})

export default AppNavigator;