import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';


import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

AsyncStorage.setItem('isLogin', 'true')

const Stack = createStackNavigator();

function App() {

  const [isLogin, setIsLogin] = useState('false')

  return (
    (isLogin == 'true') ? (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    ) : (
      <>
        <View>
          <LoginScreen />
        </View>
      </>
    )
  );
}
export default App;