import React from 'react'
import { StatusBar } from 'react-native'
import DepositCalculator from './app/components/DepositCalculator'

import MaterialBottomTab from './app/navigation/MaterialBottomTab'

export default function App() {
  return (
    <>
      {/* <MaterialBottomTab /> */}
      <DepositCalculator />
      <StatusBar style="auto" backgroundColor="white" barStyle="dark-content" />
    </>
  )
}
