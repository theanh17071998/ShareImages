import * as React from 'react'
import { Button, View, Text } from 'react-native'
import LoginComponent from '../components/login/Login'
import SignupComponent from '../components/login/Signup'

function LoginScreen(props) {

  const [screenName, setScreenName] = React.useState('Login')

  const changeScreen = (type) => {
    return () => setScreenName(type)
  }

  const { loginSuccess } = props.onLoginSuccess

  const loginSuccess1 = (isLogin) => {
    return () => loginSuccess(isLogin)()
  }

  return (
    <View style={{ height: '100%' }}>
      {
        screenName == 'Login' ? (
          <LoginComponent onChangeScreen={{ changeScreen, loginSuccess1 }} />
        ) : (
          <SignupComponent onChangeScreen={{ changeScreen }} />
        )
      }
    </View>
  )
}

export default LoginScreen