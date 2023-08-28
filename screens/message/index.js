import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import MESSAGES from '../../data/fakeMessage'
import DOCTORS from '../../data/fakeDoctor'
import styles from './style'

const Message = () => {
  return (
    <FlatList
      data={MESSAGES}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>{
        let rand = Math.floor(Math.random()*DOCTORS.length);
        item.image = DOCTORS[rand].image
        return (
          <TouchableOpacity style={styles.msgContainer} >
            <Image source={{uri:`${item.image}`}} style={styles.imgUsrMsg} />
            <View style={styles.usrMsg} >
              <Text style={styles.username} > {item.fullName} </Text>
              <Text style={styles.msgText} > {item.lastMessage} </Text>
              <Text style={styles.dateMsg} > {item.date} </Text>
            </View>
          </TouchableOpacity>
        )
      }}
    >
      
    </FlatList>
  )
}

export default Message