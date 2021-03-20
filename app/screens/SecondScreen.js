import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import DepositCalculator from '../components/DepositCalculator'
import BankInfo from '../components/BankInfo'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function SecondScreen() {
  return (
    <View style={styles.view}>
      {/* <Stack.Navigator>
        <Stack.Screen name="DepositCalculator" component={DepositCalculator} />
        <Stack.Screen name="BankInfo" component={BankInfo} />
      </Stack.Navigator> */}
      <DepositCalculator />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
