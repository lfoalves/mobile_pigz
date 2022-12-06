import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient'

import { Background } from "../../components/Background";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Header } from "../../components/Header";
import { THEME } from "../../theme";

import { styles } from './styles'

import imgCheck from '../../assets/check.png'
import imgClose from '../../assets/close.png'

import { confirmDialog } from '../../utils/confirmDialog'

export function Delivery() {
  const navigation = useNavigation()
  const [data, setData] = useState({
    id: 6789,
    time: 30,
    km: 8,
    collect: {
      km: 2,
      business: 'Restaurante Recanto da Peixada'
    },
    delivery: {
      km: 6,
      price: 13.75,
      adress: {
        street: 'Av. Cabo dos Soldados',
        district: 'Caranã',
        number: 201,
      }
    } 
  })

  function handleAcceptDelivery() {
    confirmDialog({
      title: 'Nova entrega',
      description: 'Aceitar nova entrega?',
      execute: () => Alert.alert('Delivery', 'Entraga iniciada com sucesso!')
    })
  }

  function handleRejectDelivery() {
    confirmDialog({
      title: 'Nova entrega',
      description: 'Rejeitar nova entrega?',
      execute: () => {
        Alert.alert('Delivery', 'Entrega rejeitada.')
        navigation.navigate('home')
      }
    })
  }

  return (
    <Background>
      <SafeAreaView style={styles.screen.container}>

        <Header title={'Nova entrega'} />
        
        <ScrollView style={styles.screen.content}>

          <View style={styles.info.container}>

            <View style={styles.info.header.container}>
              <View style={styles.info.time.box}>
                <Text style={styles.info.time.title}>Tempo estimado</Text>
                <Text style={styles.info.time.number}>{data.time} Min</Text>
              </View>

              <View style={styles.info.time.box}>
                <Text style={styles.info.time.title}>Número de ID</Text>
                <Text style={styles.info.time.number}># {data.id}</Text>
              </View>
            </View>

            <View style={styles.info.price.box}>
              <Text style={styles.info.price.title}>Valor da entrega</Text>
              <Text style={styles.info.price.number}>R$ {String(data.delivery.price).replace('.',',')}</Text>
            </View>

            <View style={styles.delivery.container}>
              <View style={styles.delivery.button.container}>
                <LinearGradient
                  start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                  colors={THEME.COLORS.GRADIENT}

                  style={styles.delivery.button.box}
                >
                  <View style={styles.delivery.button.image.box}>
                    <Image
                      style={styles.delivery.button.image.img}
                      source={require('../../assets/delivery.png')}
                    />
                  </View>
                  <View>
                    <Text style={styles.delivery.button.title}>Entrega</Text>
                    <Text style={styles.delivery.button.description}>Percurso total: {data.km}Km</Text>
                  </View>
                </LinearGradient>
              </View>

              <View style={styles.delivery.info.container}>
                <View style={styles.delivery.info.content}>

                  <View style={styles.delivery.info.box}>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginLeft: -8}}>
                      <LinearGradient
                        style={styles.delivery.info.ball.big}
                        start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                        colors={THEME.COLORS.GRADIENT}
                      />
                      <Text style={styles.delivery.info.text.title}>Coleta</Text>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginLeft: -8}}>
                      <View style={styles.delivery.info.ball.small} />
                      <Text style={styles.delivery.info.text.description}>{data.collect.business}</Text>
                    </View>
                    <Text
                      style={[styles.delivery.info.text.description, { backgroundColor: 'transparent', marginLeft: 20 }]}
                    >
                      Distancia: {data.collect.km}km
                    </Text>
                  </View>

                  <View style={styles.delivery.info.box}>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginLeft: -8}}>
                      <LinearGradient
                        style={styles.delivery.info.ball.big}
                        start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                        colors={THEME.COLORS.GRADIENT}
                      />
                      <Text style={styles.delivery.info.text.title}>Entrega</Text>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginLeft: -8}}>
                      <View style={styles.delivery.info.ball.small} />
                      <Text style={styles.delivery.info.text.description}>{data.delivery.adress.street + ' - ' + data.delivery.adress.district}</Text>
                    </View>
                    <Text
                      style={[styles.delivery.info.text.description, { backgroundColor: 'transparent', marginLeft: 20 }]}
                    >
                      Distancia: {data.delivery.km}km
                    </Text>
                  </View>

                </View>
              </View>
            </View>

            <View style={styles.options.container}>
              <ButtonGradient
                title={'Aceitar'}
                img={imgCheck}
                onPress={handleAcceptDelivery}
              />
              <View style={{marginTop: 16}}>
                <ButtonGradient
                  title={'Rejeitar'}
                  img={imgClose}
                  isClose
                  onPress={handleRejectDelivery}
                />
              </View>
            </View>                            

          </View>
        
        </ScrollView>

      </SafeAreaView>
    </Background>
  )
}