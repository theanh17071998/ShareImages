import React, { Component, useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  AsyncStorage,
  Modal,
  TouchableHighlight,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, Header, SearchBar, Button } from 'react-native-elements'
import { API } from '../../constants/api'
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool'
import UserContext from '../../contexts/UserContext'
import { showMessage, hideMessage } from "react-native-flash-message";

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

export default function Comments(props) {
  const { socket } = useContext(UserContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [newComment, onChangeText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null)
  const [commentId, setCommentId] = useState('')

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
    AsyncStorage.getItem('user').then((userTemp) => {
        if (userTemp) {
            setUser(JSON.parse(userTemp))
            socket.emit('clientJoinRoom', JSON.parse(userTemp).userName)
            socket.on('serverUpdateFullScreen', (imageId) => {
              if (imageId == props.imageid) {
                getData()
              }
            })
            socket.on('serverClickNotify', (notify) => {
              fetch(API.GET_COMMENT_BY_IMAGEID + notify.imageId, {
                headers: jsonHeader.headers,
                method: getMethod.method,
              }).then(response => response.json())
                .then((res) => {
                  if (res.code == 200) {
                    setData(res.data.comments.reverse())
                    // console.log('asdas')
                    // console.log(res.data.comments)
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            })
        }
    })
  }, [])

  const getData = () => {
    fetch(API.GET_COMMENT_BY_IMAGEID + props.imageid, {
      headers: jsonHeader.headers,
      method: getMethod.method,
    }).then(response => response.json())
      .then((res) => {
        if (res.code == 200) {
          setData(res.data.comments.reverse())
          // console.log('asdas')
          // console.log(res.data.comments)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function updateComment() {
    setLoading(true)
    fetch(API.UPDATE_COMMENT_BY_COMMENTID + `/${commentId}`, {
      headers: jsonHeader.headers,
      method: 'PUT',
      body: JSON.stringify({
        token: user.token,
        content: newComment
      })
    }).then(response => response.json())
      .then( async (res) => {
        // console.log(res)

        if (res.code == 200) {
          await getData()
          setLoading(false)
          setModalVisible(false)
          onChangeText('')
        } else {
          console.log(res)
          setLoading(false)
          setModalVisible(false)
          onChangeText('')
        }
        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteComment() {
    fetch(API.DELETE_COMMENT_BY_COMMENTID + `/${props.imageid}/${commentId}`, {
      headers: jsonHeader.headers,
      method: 'DELETE',
      body: JSON.stringify({
        token: user.token
      })
    }).then(response => response.json())
      .then( async (res) => {
        if (res.code == 200) {
          await getData()
        } else {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


return (
  <FlatList
    style={styles.root}
    data={data}
    ItemSeparatorComponent={() => {
      return (
        <View style={styles.separator} />
      )
    }}
    keyExtractor={(item) => {
      return item.id;
    }}
    renderItem={(item) => {
      const Comment = item.item;
      return (
        <View style={styles.container}>
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
                <Text style={styles.modalText}>Chỉnh sửa bình luận</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', padding: 10, marginBottom: 10, borderBottomWidth: 1 }}
                  onChangeText={text => onChangeText(text)}
                  value={newComment}
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
                        updateComment();
                      }}
                    >
                      <Text style={styles.textStyle}>Xác nhận</Text>
                    </TouchableHighlight>
                  )
                }
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => { }}>
            <Image style={styles.image} source={{ uri: Comment.user.avatarUrl }} />
          </TouchableOpacity>
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <Text style={styles.name}>{Comment.user.fullName}</Text>
              <Text style={styles.time}>
                {`${
                  new Date(Comment.date).getHours() + ':' + 
                  new Date(Comment.date).getMinutes() + ':' + 
                  new Date(Comment.date).getSeconds() + ' ' + 'Ngày ' +
                  new Date(Comment.date).getDate() + '/' + 
                  (new Date(Comment.date).getMonth() + 1) + '/' + 
                  new Date(Comment.date).getFullYear() + '  '
                }`}
              </Text>
            </View>
            <Text rkType='primary3 mediumLine'>{Comment.content}</Text>
          </View>
          {
            item.item.user.userId == user.userId ? (
              <View>
                <Button
                  icon={
                    <Icon
                      name="trash-o"
                      size={10}
                      color="white"
                    />
                  }
                  iconRight
                  title=""
                  buttonStyle={{ backgroundColor: '#dc3545', marginBottom: 3 }}
                  onPress={ () => {
                    setCommentId(item.item._id)
                    Alert.alert(
                      "Xóa bình luận",
                      "Bạn có chắc chắn muốn xóa bình luận này không?",
                      [
                        {
                          text: "Thôi",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "Xóa luôn", onPress: () => {
                          console.log('XÓa')
                          deleteComment()
                        }}
                      ],
                      { cancelable: false }
                    )
                  }}
                />
                <Button
                  icon={
                    <Icon
                      name="edit"
                      size={10}
                      color="white"
                    />
                  }
                  iconRight
                  title=""
                  buttonStyle={{ backgroundColor: '#ffc107' }}
                  onPress={ () => {
                    setCommentId(item.item._id)
                    setModalVisible(true)
                  }}
                />
              </View>
            ) : (
              <View></View>
            )
          }
        </View>
      );
    }} />
);
}


const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    paddingHorizontal: screenWidth(4),
    marginBottom: screenHeight(10)
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
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