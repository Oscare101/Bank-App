import React from 'react'
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native'
import Deposit from '../components/Deposit'
import BankInfo from '../components/BankInfo'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import { TouchableOpacity } from 'react-native-gesture-handler'
const Stack = createStackNavigator()

function AccumulationScreen({ navigation }) {
  return (
    <View>
      <LinearGradient
        colors={['#0962BC', '#3A97F7']}
        start={[0, 1]}
        end={[1, 0]}
        style={{
          width: width,
          height: height * 0.3,
          zIndex: 1,
          top: 0,
        }}
      ></LinearGradient>

      <View style={styles.view}>
        <View>
          <TouchableOpacity
            onPress={() => alert('ще не готовий')}
            activeOpacity={1}
            style={{ padding: 10 }}
          >
            <View style={styles.banka}>
              <LinearGradient
                colors={['#B3497A', '#F1958A']}
                start={[0, 0]}
                end={[1, 1]}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
              >
                <View style={styles.bankaIcon}>
                  <FontAwesome5 name="piggy-bank" size={24} color="white" />
                </View>
              </LinearGradient>

              <Text style={styles.text}>Відкрити Банку</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Deposit')
              }}
              activeOpacity={1}
              style={{ padding: 10 }}
            >
              <View style={styles.deposit}>
                <LinearGradient
                  colors={['#0E69C2', '#3292F8']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    overflow: 'hidden',
                  }}
                >
                  <View style={styles.depositIcon}>
                    <View style={styles.depositBorder}>
                      <AntDesign name="plus" size={15} color="white" />
                    </View>
                  </View>
                </LinearGradient>

                <Text style={styles.text}>Відкрити Депозит</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert('ще не готовий')}
              activeOpacity={1}
              style={{ padding: 10 }}
            >
              <View style={styles.archive}>
                <LinearGradient
                  colors={['#5C7789', '#7B96A1']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    overflow: 'hidden',
                  }}
                >
                  <View style={styles.archiveIcon}>
                    <View style={styles.archiveBorder}>
                      <Feather name="check" size={15} color="white" />
                    </View>
                  </View>
                </LinearGradient>

                <Text style={styles.text}>Архів</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default function Accumulation() {
  return (
    <Stack.Navigator initialRouteName="AccumulationScreen" headerMode="none">
      <Stack.Screen name="AccumulationScreen" component={AccumulationScreen} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="BankInfo" component={BankInfo} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  blue: {
    backgroundColor: '#1E79D6',
    height: height * 0.3,
    zIndex: 0,
    // position: 'absolute',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: height,
    width: width,
    position: 'absolute',
    zIndex: 2,
  },

  banka: {
    backgroundColor: '#fff',
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 20,
    padding: 25,
    marginBottom: 0,
    alignSelf: 'center',
    elevation: 2,
  },
  bankaIcon: {
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 20,
  },
  deposit: {
    backgroundColor: '#fff',
    width: width * 0.425,
    height: height * 0.25,
    borderRadius: 20,
    padding: 25,
    marginRight: 0,
    elevation: 2,
  },
  depositIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
  depositBorder: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  archive: {
    backgroundColor: '#fff',
    width: width * 0.425,
    height: height * 0.25,
    borderRadius: 20,
    padding: 25,
    marginLeft: 0,
    elevation: 2,
  },
  archiveIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
  archiveBorder: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 3,
  },
})
