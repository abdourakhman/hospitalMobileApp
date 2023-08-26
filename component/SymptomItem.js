import React from 'react'
import dashboardStyles from '../screens/Home/styles'
import { Text, TouchableOpacity, Image } from 'react-native'

const SymptomItem = ( {item} ) => {
  return (
    <TouchableOpacity style={dashboardStyles.symptomItem} key={item.id}>
        <Text style={dashboardStyles.title} > {item.title} </Text>
        <Image source={{uri:`${item.image}`}} style={dashboardStyles.imageSymptom} />
    </TouchableOpacity>
  )
}

export default SymptomItem;