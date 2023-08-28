import { View, Text, Image ,FlatList} from 'react-native'
import React from 'react'
import styles from '../settings/styles'
import SETTINGS from '../../data/fakeSetting'
import SettingItem from '../../component/SettingItem'

const Setting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../../assets/image/Doctor_07.jpg')}  style={styles.image} />
        <View style={styles.userInfo} >
          <Text style={styles.username } >Mickel Do</Text>
          <Text style={styles.email} >MikeDo22@gmail.com</Text>
          <Text>+212 0610392833</Text>
        </View>
      </View>
      <FlatList 
        data={SETTINGS}
        keyExtractor={(item)=> item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
          return (
            <SettingItem item={item} />
          )
        }}
      />
    </View>
  )
}

export default Setting