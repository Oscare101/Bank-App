import React from 'react'
import { StatusBar } from 'react-native'
import BottomTab from './app/navigation/BottomTab'

export default function App() {
  return (
    <>
      <BottomTab />
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
    </>
  )
}
