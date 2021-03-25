import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CreditScreen() {
  return (
    <View style={styles.view}>
      <Text>Credit Screen</Text>
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
