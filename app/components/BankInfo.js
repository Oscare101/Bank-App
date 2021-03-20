import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function BankInfo({ navigation }) {
  return (
    <View style={styles.view}>
      <Text>d</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DepositCalculator')}
      />
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
