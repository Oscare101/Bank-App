import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Switch,
  Linking,
  Modal,
  ScrollView,
  _ScrollView,
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Deposit({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false) // модал
  const [blackPercent, setBlackPercent] = useState() // % если выводить на карту
  const [storagePercent, setStoragePercent] = useState() // % если накапливать на депозите
  const [percent, setPercent] = useState(10) // процент депозита
  const [monthName, setMonthName] = useState(' місяців')
  const [months, setMonths] = useState(12) // срок депозита
  const [deposit, setDeposit] = useState('Додавати % до депозіту') // снимать или накапливать
  const [anticipatorily, setAnticipatorily] = useState(false) // ечть ли досрочное снятие

  const toggleSwitch = () => {
    setAnticipatorily((previousState) => !previousState)
    if (months > 2) {
      if (!anticipatorily) {
        let c = percent - 0.5
        setPercent(c)
      } else {
        let c = percent + 0.5
        setPercent(c)
      }
    } else setAnticipatorily(false)
  }

  const IconDeposit = () => {
    if (deposit == 'Додавати % до депозіту') {
      return (
        <View style={styles.percent}>
          <LinearGradient
            colors={['#F23414', '#FF6C06']}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              overflow: 'hidden',
              alignItems: 'center',
            }}
          >
            <View style={styles.iconPercent}>
              <View style={styles.circle}>
                <Feather name="percent" size={24} color="white" />
              </View>
            </View>
          </LinearGradient>

          <View style={{ marginLeft: 20 }}>
            <Text style={styles.title}>{deposit}</Text>
            <Text style={styles.grey}>Щомісяця</Text>
          </View>
        </View>
      )
    } else
      return (
        <View style={styles.percent}>
          <View style={styles.iconCard}>
            <FontAwesome name="cc-mastercard" size={24} color="white" />
          </View>
          <View>
            <Text style={styles.title}>Щомісячно виплачувати %</Text>
            <Text style={styles.grey}>На мою чорну картку</Text>
          </View>
        </View>
      )
  }

  const MinusMonth = () => {
    if (months > 1) {
      let a = months - 1

      setMonths(a)
      if (a == 1) {
        setMonthName(' місяць')
      } else if (1 < a && a < 5) {
        setMonthName(' місяці')
      } else if (a > 4) {
        setMonthName(' місяців')
      }
      Percent(a)
    }
  }

  const PlusMonth = () => {
    if (months < 12) {
      let b = months + 1
      setMonths(b)
      if (b == 1) {
        setMonthName(' місяць')
      } else if (1 < b && b < 5) {
        setMonthName(' місяці')
      } else if (b > 4) {
        setMonthName(' місяців')
      }

      Percent(b)
    }
  }

  const Percent = (b) => {
    switch (anticipatorily) {
      case true:
        switch (b) {
          case 12:
            setPercent(9.5)
            break
          case 11:
          case 10:
          case 9:
            setPercent(9)
            break
          case 8:
          case 7:
          case 6:
            setPercent(8.5)
            break
          case 5:
          case 4:
          case 3:
            setPercent(7.5)
            break
          case 2:
          case 1:
            setPercent(7)
            setAnticipatorily(false)
            break
        }
        break
      case false:
        switch (b) {
          case 12:
            setPercent(10)
            break
          case 11:
          case 10:
          case 9:
            setPercent(9.5)
            break
          case 8:
          case 7:
          case 6:
            setPercent(9)
            break
          case 5:
          case 4:
          case 3:
            setPercent(8)
            break
          case 2:
          case 1:
            setPercent(7)
            setAnticipatorily(false)
            break
        }
        break
    }
  }

  const getPercentToCard = () => {
    switch (percent) {
      case 10:
        let s10 = (percent * 0.835).toFixed(2)
        setStoragePercent(s10)
        break
      case 9.5:
        let s95 = (percent * 0.831).toFixed(2)
        setStoragePercent(s95)
        break
      case 9:
        let s9 = (percent * 0.82).toFixed(2)
        setStoragePercent(s9)
        break
      case 8.5:
        let s85 = (percent * 0.819).toFixed(2)
        setStoragePercent(s85)
        break
      case 8:
        let s8 = (percent * 0.814).toFixed(2)
        setStoragePercent(s8)
        break
      case 7.5:
        let s75 = (percent * 0.81).toFixed(2)
        setStoragePercent(s75)
        break
      case 7:
        let s7 = (percent * 0.805).toFixed(2)
        setStoragePercent(s7)
        break
    }
    let p = (percent * 0.805).toFixed(2)
    setBlackPercent(p)
  }
  return (
    <View style={styles.view}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          <View styl={styles.smalModal}>
            <View
              style={{
                width: width,
                borderColor: '#999',
                borderWidth: 1,

                height: 1000,
                backgroundColor: '#f7f7f7',
                position: 'absolute',
                borderRadius: 20,
                left: -15,
              }}
            ></View>
            <View style={{ padding: 10 }}>
              <Text style={styles.title}>
                Як ви будете отримувати проценти?
              </Text>
              <Text style={styles.grey}>Як ви будете отримувати проценти?</Text>
            </View>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setModalVisible(!modalVisible)
                setDeposit('Додавати % до депозіту')
              }}
            >
              <View
                style={[
                  styles.percent,
                  { elevation: 0, marginBottom: 0, backgroundColor: '#f7f7f7' },
                ]}
              >
                <LinearGradient
                  colors={['#F23414', '#FF6C06']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    overflow: 'hidden',
                    alignItems: 'center',
                  }}
                >
                  <View style={styles.iconPercent}>
                    <View style={styles.circle}>
                      <Feather name="percent" size={24} color="white" />
                    </View>
                  </View>
                </LinearGradient>
                <View style={{ marginLeft: 20, paddingRight: 20 }}>
                  <Text style={styles.title}>Додавати % до депозіту</Text>
                  <Text style={styles.grey}>
                    Дохід після сплати податків становитиме {storagePercent}%
                    річних
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setModalVisible(!modalVisible)
                setDeposit('На мою чорну картку')
              }}
            >
              <View
                style={[
                  styles.percent,
                  { elevation: 0, margin: 0, backgroundColor: '#f7f7f7' },
                ]}
              >
                <View style={styles.iconCard}>
                  <FontAwesome name="cc-mastercard" size={24} color="white" />
                </View>
                <View style={{ paddingRight: 50 }}>
                  <Text style={styles.title}>На мою чорну картку</Text>
                  <Text style={styles.grey}>
                    Дохід після сплати податків становитиме {blackPercent}%
                    річних
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={{ position: 'absolute', top: 30, left: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <AntDesign name="arrowleft" size={30} color="red" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{percent}%</Text>
      </View>

      <View style={styles.currency}>
        <TouchableOpacity>
          <View style={styles.currencyItem}>
            <View style={styles.currencyIcon}>
              <View style={styles.currencyBorder}>
                <FontAwesome5 name="hryvnia" size={15} color="black" />
              </View>
            </View>

            <Text style={styles.currencyText}>Гривня</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.line}></View>

        <TouchableOpacity>
          <View style={styles.currencyItem}>
            <View style={styles.currencyIcon}>
              <View style={styles.currencyBorder}>
                <FontAwesome5 name="dollar-sign" size={15} color="black" />
              </View>
            </View>
            <Text style={styles.currencyText}>Доллар</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.line}></View>

        <TouchableOpacity>
          <View style={styles.currencyItem}>
            <View style={styles.currencyIcon}>
              <View style={styles.currencyBorder}>
                <FontAwesome5 name="euro-sign" size={15} color="black" />
              </View>
            </View>
            <Text style={styles.currencyText}>Євро</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.months}>
        <TouchableOpacity onPress={() => MinusMonth()}>
          <View style={styles.greyCircle}>
            <AntDesign name="minus" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.title}>
            {months}
            {monthName}
          </Text>
          <Text style={styles.grey}>Процентна ставка {percent}%</Text>
        </View>
        <TouchableOpacity onPress={() => PlusMonth()}>
          <View style={styles.greyCircle}>
            <AntDesign name="plus" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          getPercentToCard()
          setModalVisible(true)
        }}
      >
        <IconDeposit />
      </TouchableOpacity>

      <View
        style={months > 2 ? styles.period : [styles.period, { opacity: 0.8 }]}
      >
        <LinearGradient
          colors={['#099E6B', '#00C27F']}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesome name="money" size={24} color="white" />
        </LinearGradient>

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>Дострокове розірвання</Text>
          <Text style={styles.grey}>Проценти будуть нижчи</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: '#767577', true: '#B8F5AA' }}
            thumbColor={anticipatorily ? '#4AB931' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={anticipatorily}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.fg.gov.ua/')}
      >
        <View
          style={{
            width: width * 0.9,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <View style={{ marginHorizontal: 20 }}>
            <FontAwesome5 name="hands" size={24} color="#888" />
          </View>

          <Text style={[styles.grey, { paddingLeft: 10, fontSize: 13 }]}>
            Ми є учасниками Фонду гарантування вкладів фізичних осіб
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ position: 'absolute', bottom: 10 }}>
        <TouchableOpacity onPress={() => alert('поки ще ні')}>
          <View style={styles.offer}>
            <Text style={styles.offerText}>Оформити депозит</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  currency: {
    flexDirection: 'row',
    width: width * 0.93,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    backgroundColor: '#fff',

    borderRadius: 15,
    marginVertical: 15,
    height: 110,
  },
  currencyItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: width * 0.3,
  },
  currencyText: {
    fontWeight: '700',
    fontSize: 16,
  },
  line: {
    backgroundColor: '#ddd',
    width: 1,
    height: '70%',
  },
  currencyIcon: {
    borderRadius: 100,
    padding: 7,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  currencyBorder: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  months: {
    flexDirection: 'row',
    width: width * 0.93,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  greyCircle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    padding: 5,
  },
  percent: {
    flexDirection: 'row',
    width: width * 0.93,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 2,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  iconPercent: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconCard: {
    backgroundColor: '#000',
    borderRadius: 100,

    marginRight: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    padding: 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
  },
  grey: {
    color: '#777',
    flexWrap: 'wrap',
  },
  period: {
    flexDirection: 'row',
    width: width * 0.93,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 2,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  iconMoney: {
    borderRadius: 100,
    marginRight: 20,
  },
  switch: {
    marginLeft: 40,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  smalModal: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 20,
    width: width,
    height: 200,
    overflow: 'hidden',
  },
  offer: {
    backgroundColor: '#FB5255',
    width: width * 0.93,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerText: {
    color: '#fff',
    fontSize: 17,
  },
})
