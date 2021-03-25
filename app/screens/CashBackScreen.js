import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function CashBackScreen() {
  return (
    <View>
      <LinearGradient
        colors={['#0D71BC', '#01AAAD']}
        start={[0, 1]}
        end={[1, 0]}
        style={{
          width: width,
          height: height * 0.3,
          zIndex: 1,
          top: 0,
        }}
      ></LinearGradient>
      <View style={styles.view}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: height,
    width: width,
    position: 'absolute',
    zIndex: 2,
  },
})
