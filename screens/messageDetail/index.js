import { View, Text, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import CONVERSATIONS from '../../data/fakeConversation';
import Conversation from '../../component/Conversation';

const MessageDetail = ({route,navigation}) => {
const {item} = route.params;
useEffect(()=>{
    navigation.setOptions({title:item.fullName})
},[])
  return (
    <View>
      <FlatList 
        data={CONVERSATIONS}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return(
                <Conversation item={item} />
            )
        }}
      />
    </View>
  )
}

export default MessageDetail