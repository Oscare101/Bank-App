import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  Feather,
  Fontisto,
} from '@expo/vector-icons'
import FirstScreen from '../screens/FirstScreen'
import CreditScreen from '../screens/CreditScreen'
import Accumulation from '../screens/Accumulation'
import CashBackScreen from '../screens/CashBackScreen'
import MoreScreen from '../screens/MoreScreen'

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
            } else if (route.name === 'Кредит') {
              if ((iconName = focused)) {
                return <Entypo name="pie-chart" size={24} color={color} />
              } else {
                return <Entypo name="pie-chart" size={24} color={color} />
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
            } else if (route.name === 'Кешбек') {
              if ((iconName = focused)) {
                return <Ionicons name="gift" size={24} color={color} />
              } else {
                return <Ionicons name="gift" size={24} color={color} />
              }
            } else if (route.name === 'Ще') {
              if ((iconName = focused)) {
                return <Fontisto name="more-v-a" size={24} color={color} />
              } else {
                return <Fontisto name="more-v-a" size={24} color={color} />
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
        <Tab.Screen name="Кредит" component={CreditScreen} />
        <Tab.Screen name="Накопичення" component={Accumulation} />
        <Tab.Screen name="Кешбек" component={CashBackScreen} />
        <Tab.Screen name="Ще" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
