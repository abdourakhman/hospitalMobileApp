import { View, Text, Button } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from '../Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Message from '../message';
import Setting from '../settings';

const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
    initialRouteName='Dashboard'>
        <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel:'Dashboard',
                tabBarIcon:({color,size}) =>(
                    <MaterialCommunityIcons  name="view-dashboard" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name='Message' 
            component={Message}
            options={{
                tabBarLabel:'Messages',
                tabBarIcon:({color,size}) =>(
                    <MaterialCommunityIcons  name="chat" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name='Setting' 
            component={Setting}
            options={{
                tabBarLabel:'Settings',
                tabBarIcon:({color,size}) =>(
                    <MaterialCommunityIcons  name="cogs" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNav