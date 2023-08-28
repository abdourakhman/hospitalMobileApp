import { View, TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../screens/messageDetail/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const MessageInput = () => {
  return (
    <View style={styles.containerInput} >
        <TextInput 
            placeholder='Message ici ...'
            style={styles.input} 
        /> 
        <TouchableOpacity>
            <MaterialCommunityIcons  name="send" style={styles.send} size={24} />
        </TouchableOpacity>
    </View>
  )
}

export default MessageInput