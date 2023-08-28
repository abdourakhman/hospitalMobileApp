import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../screens/message/style'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const MessageItem = ({item, navigation} ) => {
  return (
    <TouchableOpacity style={styles.msgContainer} onPress={()=>navigation.navigate('MessageDetail',{item})} >
        <Image source={{uri:`${item.image}`}} style={styles.imgUsrMsg} />
        <View style={styles.usrMsg} >
          <Text style={styles.username} > {item.fullName} </Text>
          <Text style={styles.msgText} > {item.lastMessage} </Text>
          <Text style={styles.dateMsg} > {dayjs(item.date).fromNow(true)} </Text>
        </View>
    </TouchableOpacity>
  )
}

export default MessageItem