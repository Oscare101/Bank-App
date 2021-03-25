import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import {
  AntDesign,
  FontAwesome5,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

export default function MoreScreen() {
  const [dollarSell, setDollarSell] = useState(27.78)
  const [dollarBuy, setDollarBuy] = useState(28.03)
  const [euroSell, setEuroSell] = useState(32.7)
  const [euroBuy, setEuroBuy] = useState(33.1)

  return (
    <View>
      <LinearGradient
        colors={['#304C61', '#4B7293']}
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
        <View style={styles.header}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={styles.userName}>Кирил Федорцев</Text>
        </View>
        <View style={styles.course}>
          <View style={styles.courseItem}>
            <Text style={styles.courseText}>
              USD {dollarSell} / {dollarBuy}
            </Text>
          </View>
          <View style={{ width: 1, height: '100%', opacity: 0.5 }}></View>
          <View style={styles.courseItem}>
            <Text style={styles.courseText}>
              EUR {euroSell} / {euroBuy}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 15, height: 100 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
              <View style={styles.horizontalItem}>
                <LinearGradient
                  colors={['#1A8FB9', '#1FA6EB']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 40,
                    height: 40,
                    overflow: 'hidden',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EvilIcons name="comment" size={33} color="white" />
                </LinearGradient>
                <Text style={styles.horizontalItemText}>Служба підтримки</Text>
              </View>
              <View style={styles.horizontalItem}>
                <LinearGradient
                  colors={['#30B759', '#44D06C']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 40,
                    height: 40,
                    overflow: 'hidden',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FontAwesome5 name="list-alt" size={22} color="white" />
                </LinearGradient>
                <Text style={styles.horizontalItemText}>Тарифи</Text>
              </View>
              <View style={styles.horizontalItem}>
                <LinearGradient
                  colors={['#22629B', '#3182DB']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 40,
                    height: 40,
                    overflow: 'hidden',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={24}
                    color="white"
                  />
                </LinearGradient>
                <Text style={styles.horizontalItemText}>
                  Виписки та довідки
                </Text>
              </View>
              <View style={styles.horizontalItem}>
                <LinearGradient
                  colors={['#798386', '#90A09F']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 40,
                    height: 40,
                    overflow: 'hidden',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AntDesign name="question" size={24} color="white" />
                </LinearGradient>
                <Text style={styles.horizontalItemText}>
                  Поширені запитання
                </Text>
              </View>
              <View style={styles.horizontalItem}>
                <LinearGradient
                  colors={['#6D628E', '#887AAD']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{
                    width: 40,
                    height: 40,
                    overflow: 'hidden',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons name="location-outline" size={24} color="white" />
                </LinearGradient>
                <Text style={styles.horizontalItemText}>Точки поповнення</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            width: width * 0.95,
            paddingTop: 10,
          }}
        >
          <View style={styles.listItem}>
            <LinearGradient
              colors={['#FD4047', '#FF5B64']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                width: 40,
                height: 40,
                overflow: 'hidden',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="gift-outline" size={24} color="white" />
            </LinearGradient>
            <Text style={styles.listText}>Заробити 450 грн кешбеку</Text>
          </View>
          <View style={styles.listItem}>
            <LinearGradient
              colors={['#126FBD', '#1381E0']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                width: 40,
                height: 40,
                overflow: 'hidden',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color="white"
              />
            </LinearGradient>
            <Text style={styles.listText}>Сканер QR-коду</Text>
          </View>
          <View style={styles.listItem}>
            <LinearGradient
              colors={['#7259B2', '#914FD1']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                width: 40,
                height: 40,
                overflow: 'hidden',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="md-car-outline" size={24} color="white" />
            </LinearGradient>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.listText}>Автоцивілка</Text>
              <Text style={{ color: '#666', paddingLeft: 20 }}>
                Едектронний поліс
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    height: height,
    width: width,
    position: 'absolute',
    zIndex: 2,
  },
  header: {
    flexDirection: 'row',
    width: width * 0.8,
    paddingTop: 40,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    paddingLeft: 10,
  },
  course: {
    width: width * 0.9,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    overflow: 'hidden',
  },
  courseItem: {
    height: 50,
    backgroundColor: '#33333333',
    width: '49.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseText: {
    color: '#fff',
    fontSize: 16,
  },
  horizontalItem: {
    height: 75,
    width: width * 0.5,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 3,
  },
  horizontalItemText: {
    fontSize: 18,
    paddingLeft: 10,
    width: 100,
    flexWrap: 'wrap',
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  listText: {
    fontSize: 18,
    paddingLeft: 20,
  },
})
