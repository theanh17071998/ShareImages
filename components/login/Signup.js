// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Modal } from 'react-native-elements';
function Login(props) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('')
  const [fullName, setFullName] = useState('');
  const { changeScreen } = props.onChangeScreen;

  const clickSignup = () => {
    console.log({
      fullName: fullName,
      userName: userName,
      password: password,
      rePassword: rePassword
    })
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.container}>
      <View>
        <View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/564x/ce/04/29/ce0429c40d4e81dc039090ebb94c58c4.jpg' }}
              style={{ width: 100, height: 100, borderRadius: 9999 }}
            />
          </View>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={{ paddingTop: 40 }}>
          <Input
            placeholder='Nguyễn Ngọc Hải'
            errorStyle={{ color: 'red' }}
            errorMessage={ 1 ? 'INVALID NAME' : '' }
            label='Your Full Name'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
            value={fullName}
            onChangeText={ (fullName) => { setFullName(fullName) } }
          />
          <Input
            placeholder='email@address.com / hainn'
            errorStyle={{ color: 'red' }}
            errorMessage={ 1 ? 'INVALID EMAIL ADDRESS OR USERNAME' : '' }
            label='Your Email Address / Username'
            leftIcon={
              <Icon
                name='envelope'
                size={24}
                color='black'
              />
            }
            value={userName}
            onChangeText={ (userName) => { setUserName(userName) } }
          />
          <Input placeholder="***********" secureTextEntry={true}
            errorStyle={{ color: 'red' }}
            errorMessage={ 1 ? 'INVALID PASSWORD' : '' }
            label='Your Password'
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
          <Input placeholder="***********" secureTextEntry={true}
            errorStyle={{ color: 'red' }}
            errorMessage={ 1 ? 'REPEAT PASSWORD DOES NOT MATCH' : '' }
            label='Repeat Your Password'
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='black'
              />
            }
            value={rePassword}
            onChangeText={ (rePassword) => { setRePassword(rePassword) } }
          />
          <Button
            title="SIGN UP"
            buttonStyle={{ backgroundColor: '#6dab3c', height: 60 }}
            onPress={ clickSignup }
          />
        </View>
        <View style={{ padding: 5, paddingTop: 20 }}>
          <Text>Already have an account?
            <Text onPress={ changeScreen('Login') } style={{ textDecorationLine: "underline", color: '#1890ff' }}> Login NOW</Text>
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 60
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



export default Login;