import React from 'react'
import { View, Text, Image, Dimensions} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100


const folders = [
    {
       name: 'Truyện tranh',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]
export default function PinFolder() {
    return (
        <Card containerStyle={{padding: 0}} >
        {
          folders.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                avatar={{uri:u.avatar}}
              />
            );
          })
        }
      </Card>
    )
 
}
