import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import { Card, Header, SearchBar } from 'react-native-elements'
import { API } from '../../constants/api'
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type'
import { postMethod, jsonHeader, getMethod } from '../../constants/fetchTool'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent) / 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent) / 100

export default function Comments(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(API.GET_COMMENT_BY_IMAGEID + props.imageid, {
      headers: jsonHeader.headers,
      method: getMethod.method,
    }).then(response => response.json())
      .then((res) => {
        if (res.code == 200) {
          setData(res.data.comments)
          console.log('asdas')
          console.log(res.data.comments)
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
      const Notification = item.item;
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { }}>
            <Image style={styles.image} source={{ uri: Notification.user.avatarUrl }} />
          </TouchableOpacity>
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <Text style={styles.name}>{Notification.user.userName}</Text>
              <Text style={styles.time}>
                {Date(Notification.date).split(' ')[3] +' ' + Date(Notification.date).split(' ')[4]}
                  </Text>
            </View>
            <Text rkType='primary3 mediumLine'>{Notification.content}</Text>
          </View>
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
});  