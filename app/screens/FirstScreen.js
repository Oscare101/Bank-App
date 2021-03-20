import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FirstScreen() {
  return (
    <View style={styles.view}>
      <Text>First Screen</Text>
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
