import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../screens/settings/styles'
import { COLORS } from '../helpers/constant'

const SettingItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.containerSetting} >
      <Text style={styles.textSetting} > {item.libelle} </Text>
      <AntDesign name="arrowright" size={24} color={COLORS.main} />
    </TouchableOpacity>
  )
}

export default SettingItem