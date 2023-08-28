import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/messageDetail/style'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { COLORS } from '../helpers/constant'
dayjs.extend(relativeTime)

const Conversation = ({item}) => {
    const isMine = item.user === 1; 
  return (
    <View style={[
        styles.container,
        {backgroundColor:isMine ? COLORS.main:'white'},
        {alignSelf:isMine ? 'flex-end':'flex-start'}
        ]} >
      <Text style={{
        color:isMine ? "white":'null',
        alignSelf:isMine ? 'flex-end':'flex-start'
        }}>
            {item.message} 
      </Text>
      <Text style={{
        color:isMine ? "white":'null',
        alignSelf:isMine ? 'flex-end':'flex-start'
        }}
        >
            {dayjs(item.sendingAt).fromNow(true)} 
        </Text>
    </View>
  )
}

export default Conversation