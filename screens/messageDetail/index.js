import { View, Text, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import CONVERSATIONS from '../../data/fakeConversation';
import Conversation from '../../component/Conversation';
import MessageInput from '../../component/MessageInput';

const MessageDetail = ({route,navigation}) => {
const {item} = route.params;
useEffect(()=>{
    navigation.setOptions({title:item.fullName})
},[])
  return (
    <View style={{flex:1}} >
      <FlatList 
        data={CONVERSATIONS}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return(
                <Conversation item={item} />
            )
        }}
      />
      <MessageInput />
    </View>
  )
}

export default MessageDetail