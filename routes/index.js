import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNav from '../screens/tabNav';
import MessageDetail from '../screens/messageDetail';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='TabNav'
            screenOptions={{headerShown:false}}
        >
            <Stack.Screen name='TabNav' component={TabNav}/>
            <Stack.Screen 
              name='MessageDetail' 
              component={MessageDetail}
              options={{headerShown:true}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route