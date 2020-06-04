import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { AsyncStorage } from 'react-native'


import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const loginSuccess = (isLogin) => {
    return () => setIsLogin(isLogin)
  }
  return (
    isLogin ? (
      <>
        <NavigationContainer>
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName
                switch(route.name) {
                  case 'Home':
                    iconName = focused
                    ? 'ios-home'
                    : 'ios-home'
                    break
                  case 'Search':
                    iconName = focused ? 'md-search' : 'md-search'
                    break
                  case 'Notification':
                    iconName = focused ? 'md-notifications-outline' : 'md-notifications-outline'
                    break
                  case 'Profile':
                    iconName = focused ? 'ios-person' : 'ios-person'
                    break
                }

                return <Ionicons name={iconName} size={size} color={color} />
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home">
              {
                () => (
                  <Drawer.Navigator initialRouteName="Home2">
                    <Drawer.Screen name="Home2" component={HomeScreen} />
                  </Drawer.Navigator>
                )
              }
            </Tab.Screen>
            <Tab.Screen name="Search">
              {
                () => (
                  <Drawer.Navigator initialRouteName="Home2">
                    <Drawer.Screen name="Home2" component={HomeScreen} />
                  </Drawer.Navigator>
                )
              }
            </Tab.Screen>
            <Tab.Screen name="Notification">
              {
                () => (
                  <Drawer.Navigator initialRouteName="Home2">
                    <Drawer.Screen name="Home2" component={HomeScreen} />
                  </Drawer.Navigator>
                )
              }
            </Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    ) : (
      <>
        <View>
          <LoginScreen onLoginSuccess={{ loginSuccess }} />
        </View>
      </>
    )
  )
}
export default App