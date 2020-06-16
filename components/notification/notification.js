import * as React from 'react'
import { Button, View, Text, Dimensions, StyleSheet} from 'react-native'
import { ListItem, Header} from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const screenWidth = (percent) => (windowWidth * percent)/ 100;
const windowHeight = Dimensions.get('window').height;
const screenHeight = (percent) => (windowHeight * percent)/ 100


const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'đã thích ảnh của bạn'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'đã lưu bản của bạn...'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'đã thích ảnh của bạn'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'đã thích ảnh của bạn'
    },
  ]
export default function Notification() {
    return (
      
      <View>
          <Header
            leftComponent={{ icon: 'chevron-left', color: '#fff' }}
            centerComponent={{ text: 'THÔNG BÁO', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{height: screenHeight(10), marginTop: -10}}
          />
        <View style={styles.listItem}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
              />
            ))
          }
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: screenWidth(2),
    marginTop: screenHeight(1.5)
  }
});