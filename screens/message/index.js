import { FlatList } from 'react-native'
import React from 'react'
import MESSAGES from '../../data/fakeMessage'
import DOCTORS from '../../data/fakeDoctor'
import MessageItem from '../../component/MessageItem'

const Message = ({navigation} ) => {
  return (
    <FlatList
      data={MESSAGES}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>{
        let rand = Math.floor(Math.random()*DOCTORS.length);
        item.image = DOCTORS[rand].image
        return (
          <MessageItem item={item} navigation={navigation} />
        )
      }}
    >
      
    </FlatList>
  )
}

export default Message