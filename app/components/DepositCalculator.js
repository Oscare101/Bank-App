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
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
} from '@expo/vector-icons'

const width = Dimensions.get('window').width

export default function DepositCalculator() {
  const [modalVisible, setModalVisible] = useState(false) // модал
  const [blackPercent, setBlackPercent] = useState() // % если выводить на карту
  const [storagePercent, setStoragePercent] = useState() // % если накапливать на депозите
  const [percent, setPercent] = useState(10) // процент депозита

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
          <View style={styles.iconPercent}>
            <View style={styles.circle}>
              <Feather name="percent" size={24} color="white" />
            </View>
          </View>
          <View>
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
      Percent(a)
    }
  }

  const PlusMonth = () => {
    if (months < 12) {
      let b = months + 1
      setMonths(b)
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
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modal}>
          <View>
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
              <View style={[styles.percent, { elevation: 0 }]}>
                <View style={styles.iconPercent}>
                  <View style={styles.circle}>
                    <Feather name="percent" size={24} color="white" />
                  </View>
                </View>
                <View>
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
              <View style={[styles.percent, { elevation: 0 }]}>
                <View style={styles.iconCard}>
                  <FontAwesome name="cc-mastercard" size={24} color="white" />
                </View>
                <View>
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
          <Text style={styles.title}>{months}</Text>
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
        <View style={styles.iconMoney}>
          <FontAwesome name="money" size={24} color="white" />
        </View>
        <View>
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
        <TouchableOpacity>
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
    paddingTop: 10,
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
    backgroundColor: '#F07930',
    borderRadius: 100,
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 20,
  },
  iconCard: {
    backgroundColor: '#000',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 7,
    marginRight: 20,
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
    backgroundColor: '#63D975',
    borderRadius: 100,
    padding: 10,
    marginRight: 20,
  },
  switch: {
    marginLeft: 40,
  },
  modal: {
    width: '100%',
  },
  offer: {
    backgroundColor: '#FF5757',
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
