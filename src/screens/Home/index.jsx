import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, Pressable, Alert, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { CardGeneral } from "../../components/CardGeneral";
import { CardNumber } from "../../components/CardNumber";
import { ButtonGradient } from "../../components/ButtonGradient";

import { styles } from "./styles";
import { THEME } from "../../theme";

import imgQrcode from '../../assets/qrcode.png'
import { Eye, EyeSlash } from 'phosphor-react-native'

export function Home() {
  const navigation = useNavigation()
  const [isVisible, setIsVisible] = useState(false);
  const [code, setCode] = useState('');

  const currentDate = new Date().toLocaleDateString(
    'pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
  }).split('/')

  const [data, setData] = useState({
    price: String((Math.random() + 150).toFixed(2)).replace('.', ','),
    date: currentDate[1] + '/' + currentDate[0]
  })

  function hadleNewDelivery() {
    if (!code) {
      return Alert.alert('Entrega', 'Preencha o código.')
    }
    return navigation.navigate('delivery') 
  }

  return (
    <Background>
      <SafeAreaView style={styles.screen.container}>
        
        <Header title={'Visão geral'} isHome />

        <ScrollView style={styles.screen.content}>
          <View style={styles.profit.container}>
            <LinearGradient
              colors={THEME.COLORS.GRADIENT}
              start={{x: 1, y: 0}} end={{x: 0, y: 0}}
              style={styles.profit.gradient}
            >
              <View style={styles.flex}>
                <Text style={styles.profit.today}>Ganhos do Dia</Text>
                <Text style={styles.profit.date}>{data.date}</Text>
              </View>
              <View style={[styles.flex, {marginTop: 1}]}>
                <Text style={styles.profit.price}>{ isVisible ? `R$ ${data.price}` : '----'}</Text>
                <TouchableOpacity style={[styles.flex, styles.profit.button]}
                  onPress={(e) => setIsVisible((prevState) => !prevState)}
                >
                  {
                    isVisible ? (
                      <Eye
                        color={THEME.COLORS.WHITE}
                      />
                    ) : (
                      <EyeSlash
                          color={THEME.COLORS.WHITE}
                        />
                    )
                  }
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>


          <View style={styles.summary.container}>
            <CardGeneral
              title={'Resumo das Entregas'}
            >
              <View style={styles.summary.cards}>
                <CardNumber
                  title={'Aceitas'}
                  number={15}
                />
                <CardNumber
                  title={'Rejeitadas'}
                  number={5}
                />
                <CardNumber
                  title={'Total'}
                  number={20}
                />
              </View>
            </CardGeneral>
          </View>

          <View style={styles.delivery.container}>
            <CardGeneral
              title={'Iniciar Nova Entrega'}
              description={'número de Identificação'}
            >
              <View style={styles.delivery.content}>
                <TextInput
                  style={styles.delivery.input}
                  onChangeText={setCode}
                />
                <Pressable style={styles.delivery.button.box}>
                  <Text
                    style={styles.delivery.button.text}
                    onPress={hadleNewDelivery}
                  >
                    OK
                  </Text>
                </Pressable>
              </View>
              <ButtonGradient
                title={'Escanear Qrcode'}
                img={imgQrcode}
                onPress={() => Alert.alert('QRCode', 'Centralize a camera no Código QR.')}
              />
            </CardGeneral>
          </View>

        </ScrollView>
        
        <MenuNav menuActive={'home'} />
      
      </SafeAreaView>
    </Background>
  )
}