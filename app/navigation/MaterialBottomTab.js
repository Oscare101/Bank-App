import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import FirstScreen from '../screens/FirstScreen'
import SecondScreen from '../screens/SecondScreen'
import DepositCalculator from '../components/DepositCalculator'

const Tab = createMaterialBottomTabNavigator()

export default function MaterialBottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={FirstScreen} />
        <Tab.Screen name="DepositCalculator" component={DepositCalculator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
