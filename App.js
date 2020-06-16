import React, { useState, useEffect } from 'react'
import { Button, View, Text, YellowBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.23.102:3000";
import { AsyncStorage } from 'react-native'
import { UserProvider } from './contexts/UserContext'

console.disableYellowBox = true; 

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen'
import NotificationScreen from './screens/NotificationScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


const idUser = new Date().getTime() + Math.floor(Math.random() * 220998271299).toString()
const socket = socketIOClient(ENDPOINT, {
  query: {
    name: idUser
  }
})

let number = 271299

function App() {
  async function logout() {
    await AsyncStorage.clear()
    setUser(null)
  }

  const [user, setUser] = useState(null)

  function fetchData() {
    AsyncStorage.getItem('user').then((userTemp) => {
      if (userTemp) {
        setUser(JSON.parse(userTemp))
      } else {
        setUser(null)
      }
    })
    socket.on('serverLogout', async () => {
      logout()
    })
    socket.on('serverLogin', async () => {
      const userTemp = await AsyncStorage.getItem('user')
      setUser(JSON.parse(userTemp))
    })
  }
  if (number === 271299) {
    fetchData()
    number++
  }
  return (
    // user ? (
      <UserProvider value={{socket, idUser}}>
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
                    <Drawer.Screen name="Home2" component={SearchScreen} />
                  </Drawer.Navigator>
                )
              }
            </Tab.Screen>
            <Tab.Screen name="Notification">
              {
                () => (
                  <Drawer.Navigator initialRouteName="Home2">
                    <Drawer.Screen name="Home2" component={NotificationScreen} />
                  </Drawer.Navigator>
                )
              }
            </Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserProvider>
    // ) : (
    //   <UserProvider value={{ socket, idUser }}>
    //     <View>
    //       <LoginScreen />
    //     </View>
    //   </UserProvider>
    // )
  )
}


export default App