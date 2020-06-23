import React, { useState, useEffect, useContext } from 'react'
import { Button, View, Text, Dimensions, StyleSheet, AsyncStorage} from 'react-native'
import { ListItem, Header} from 'react-native-elements'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import UserContext from '../../contexts/UserContext'
import { API } from '../../constants/api'
import { postMethod, jsonHeader } from '../../constants/fetchTool'
// import { showMessage, hideMessage } from "react-native-flash-message";
// import FlashMessage from "react-native-flash-message";

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100

export default function Notification() {
    const { socket } = useContext(UserContext)
    const [user, setUser] = useState(null)
    const [listNotify, setListNotify] = useState([])
    useEffect(() => {
        AsyncStorage.getItem('user').then((userTemp) => {
          if (userTemp) {
              setUser(JSON.parse(userTemp))
              console.log('TEST1')
              socket.emit('clientJoinRoom', JSON.parse(userTemp).userName)
              socket.on('serverUpdateNotify', (notifyResult) => {
                getData(JSON.parse(userTemp).token)
                console.log('TEST2')
              })
              getData(JSON.parse(userTemp).token)
          }
        })
    }, [])

    function getData(token) {
      fetch(API.GET_NOTIFYS_BY_USERID, {
        headers: jsonHeader.headers,
        method: 'POST',
        body: JSON.stringify({
          token: token
        })
      }).then(response => response.json())
        .then((res) => {
          if (res.code == 200) {
            setListNotify(res.data.data)
          } else {
            console.log(res)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return (
      <View>
          <Header
            centerComponent={{ text: 'THÔNG BÁO', style: { color: '#000', fontSize: 18, fontWeight: '700'} }}
            containerStyle={{height: screenHeight(10), marginTop: -10, backgroundColor: '#fff'}}
          />
        
        <ScrollView showsVerticalScrollIndicator={false}  >
          <View style={styles.listItem}>
            {
              listNotify.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar } }}
                  title={l.fromUserName}
                  subtitle={l.content}
                  bottomDivider
                />
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: screenWidth(2),
    marginTop: screenHeight(1.5),
    marginBottom: 120
  }
});