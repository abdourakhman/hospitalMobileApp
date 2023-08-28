import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/messageDetail/style'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const Conversation = ({item}) => {
    const isMine = item.user === 1; 
  return (
    <View style={[
        styles.container,
        {backgroundColor:isMine ? 'lightblue':'white'},
        {alignSelf:isMine ? 'flex-end':'flex-start'}
        ]} >
      <Text>{item.message} </Text>
      <Text>{dayjs(item.sendingAt).fromNow(true)} </Text>
    </View>
  )
}

export default Conversation