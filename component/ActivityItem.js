import React from 'react'
import dashboardStyles from '../screens/Home/styles'
import { Text, TouchableOpacity } from 'react-native'
import HospitalActivitySvg from '../assets/svg/medical_research.svg'

const ActivityItem = ( {item} ) => {
  return (
    <TouchableOpacity style={dashboardStyles.activityItem}>
        <HospitalActivitySvg width={70} height={50} />
        <Text style={dashboardStyles.title} > {item.title} </Text>
        <Text style={dashboardStyles.subtitle} > {item.subtitle} </Text>
    </TouchableOpacity>
  )
}

export default ActivityItem;