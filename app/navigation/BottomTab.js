import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import FirstScreen from '../screens/FirstScreen'
import Accumulation from '../screens/Accumulation'
import Deposit from '../components/Deposit'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Карта') {
              if ((iconName = focused)) {
                return <Ionicons name="ios-card" size={24} color={color} />
              } else {
                return <Ionicons name="ios-card" size={24} color={color} />
              }
            } else if (route.name === 'Накопичення') {
              if ((iconName = focused)) {
                return (
                  <MaterialCommunityIcons name="safe" size={30} color={color} />
                )
              } else {
                return (
                  <MaterialCommunityIcons name="safe" size={30} color={color} />
                )
              }
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F95554',
          inactiveTintColor: '#969696',
        }}
      >
        <Tab.Screen name="Карта" component={FirstScreen} />
        <Tab.Screen name="Накопичення" component={Accumulation} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
