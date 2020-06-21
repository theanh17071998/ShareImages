import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Dimensions, AsyncStorage, Modal, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import TopProfileComponent from '../components/profile/Top'
import CenterProfileComponent from '../components/profile/Center'
import { Header, Button } from 'react-native-elements'
import UserContext from '../contexts/UserContext'
import setting from '../assets/gear.png'
import { API } from '../constants/api'
import { postMethod, jsonHeader } from '../constants/fetchTool'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100

function ProfileScreen() {

  const [user, setUser] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [newUser, onChangeText] = useState(user ? user.fullName : 'FULL NAME');
  const [isLoading, setLoading] = useState(false);
  const { socket } = useContext(UserContext)


  function changeName() {
    setLoading(true)
    fetch(API.UPDATE_PROFILE, {
      headers: jsonHeader.headers,
      method: 'PUT',
      body: JSON.stringify({
        token: user.token,
        newUser: {
          fullName: newUser
        }
      })
    }).then(response => response.json())
      .then((res) => {
        console.log(res)
        if (res.code == 200) {
          AsyncStorage.setItem('user', JSON.stringify({
            ...res.data.user,
            token: user.token
          }))
          socket.emit('clientUpdateProfile', user.userName)
          AsyncStorage.getItem('user').then((userTemp) => {
            if (userTemp) {
              setUser(JSON.parse(userTemp))
              onChangeText(JSON.parse(userTemp).fullName)
              setLoading(false)
              setModalVisible(!modalVisible);
            } else {
              setUser(null)
            }
          })
        } else {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    AsyncStorage.getItem('user').then((userTemp) => {
      if (userTemp) {
        setUser(JSON.parse(userTemp))
        onChangeText(user.fullName)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Đổi tên</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', padding: 10, marginBottom: 10, borderBottomWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={newUser}
            />
            {
              isLoading ? (
                <Button
                  loading={isLoading}              
                  buttonStyle={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                />
              ) : (
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    changeName();
                  }}
                >
                  <Text style={styles.textStyle}>Xác nhận</Text>
                </TouchableHighlight>
              )
            }
          </View>
        </View>
      </Modal>
      {
        user ? (
          <View>
            <Header
              placement="left"
              centerComponent={{ text: user ? user.fullName : 'FULL NAME', style: { color: '#000', fontSize: 18, fontWeight: '700'}}}
              containerStyle={{height: screenHeight(10), marginTop: -10,  backgroundColor: '#fff', borderBottomWidth: 2}}
              rightComponent={{ icon: 'edit', color: '#000', borderRadius: '50%', onPress: () =>  setModalVisible(!modalVisible) }}
            />
            <TopProfileComponent user={user} />
            <CenterProfileComponent />
          </View>
        ) : (
          <View>
            <Text>Nguyen Ngoc Hai</Text>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    minWidth: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 7,
    padding: 10,
    minWidth: 150,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    textTransform: "uppercase"
  }
});


export default ProfileScreen