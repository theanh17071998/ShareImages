// import * as React from 'react'
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native'
import { AsyncStorage } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button, Modal } from 'react-native-elements'
import { hash256 } from '../../constants/common'
import { API } from '../../constants/api'
import { postMethod, jsonHeader } from '../../constants/fetchTool'

function Login(props) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCorrectPassword, setIsCorrectPassword] = useState(true)
  const [isCorrectUsername, setIsCorrectUsername] = useState(true)
  const { changeScreen, loginSuccess1 } = props.onChangeScreen
  const alertForgotPassword = () => {
    Alert.alert(
      "FORGOT PASSWORD",
      "UPCOMING",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )
  }

  const clickLogin = () => {
    const newPassword = (password.length > 1024) ? hash256(password.substring(0, 1024)) : hash256(password)
    setIsLoading(true)
    fetch(API.LOGIN, {
      headers: jsonHeader.headers,
      method: postMethod.method,
      body: JSON.stringify({
        password: newPassword,
        userName: userName
      })
    }).then(response => response.json())
      .then((res) => {
        setIsLoading(false)
        if (res.code == 200) {
          AsyncStorage.setItem('user', JSON.stringify(res.data.user))
          loginSuccess1(true)()
        } else {
          setIsCorrectUsername(res.data.status.isCorrectUsername)
          setIsCorrectPassword(res.data.status.isCorrectPassword)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/564x/ce/04/29/ce0429c40d4e81dc039090ebb94c58c4.jpg' }}
              style={{ width: 100, height: 100, borderRadius: 9999 }}
            />
          </View>
          <Text style={styles.title}>Sign In With</Text>
          <View style={styles.FB_GG}>
            <View style={{ width: 150, height: 60, padding: 5 }}>
              <Button
                icon={
                  <Icon
                    name="facebook"
                    size={20}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                }
                title="Facebook"
                buttonStyle={{ width: 150, height: 60, borderRadius: 5 }}
              />
            </View>
            <View style={{ width: 150, height: 60, padding: 5 }}>
              <Button
                icon={
                  <Icon
                    name="google"
                    size={20}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                }
                title="Google"
                buttonStyle={{ width: 150, height: 60, borderRadius: 5 }}
              />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 90 }}>
          <Input
            placeholder='email@address.com / hainn'
            errorStyle={{ color: 'red' }}
            errorMessage={ !isCorrectUsername ? 'INVALID EMAIL ADDRESS OR USERNAME' : '' }
            label='Your Email Address / Username'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
            value={userName}
            onChangeText={ (userName) => { setUserName(userName) } }
          />
          <Input placeholder="*********" secureTextEntry={true}
            label='Your Password'
            errorStyle={{ color: 'red' }}
            errorMessage={ !isCorrectPassword ? 'INVALID PASSWORD' : '' }
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='black'
              />
            }
            value={password}
            onChangeText={ (password) => { setPassword(password) } }
          />
          <View style={{ padding: 5, paddingBottom: 20 }}>
            <Text onPress={ alertForgotPassword } style={{ textDecorationLine: "underline", color: '#1890ff' }}>Forgot NOW?</Text>
          </View>
          {
            isLoading ? (
              <Button
                loading={isLoading}              
                buttonStyle={{ backgroundColor: '#6dab3c', height: 60 }}
              />
            ) : (
              <Button
                title="LOGIN"
                buttonStyle={{ backgroundColor: '#6dab3c', height: 60 }}
                onPress={ clickLogin }
              />
            )
          }
        </View>
        <View style={{ padding: 5, paddingTop: 20 }}>
          <Text>Not a member?
            <Text onPress={ () => changeScreen('Signup')() } style={{ textDecorationLine: "underline", color: '#1890ff' }}> Sign up NOW</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  FB_GG: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})



export default Login