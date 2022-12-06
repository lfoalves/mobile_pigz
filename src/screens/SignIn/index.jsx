import { useState } from 'react'
import { Text, TouchableOpacity, View, Image, Pressable, Alert, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import { useAuth } from '../../hooks/useAuth'

import { styles } from './styles'
import { THEME } from '../../theme'

import { Background } from '../../components/Background'
import { Input } from '../../components/Input'

import logoPigz from '../../assets/pigz-logotipo-branco.png'
import imgGoogle from '../../assets/logo-google.png'

import { Eye, EyeSlash } from 'phosphor-react-native'

export function SignIn() {
  const { signIn } = useAuth();
  let [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  async function handleSignIn() {
    if (!emailOrPhone || !password) {
      return Alert.alert('Login', 'Preencha todos os campos.')
    }

    emailOrPhone = String(emailOrPhone).trim().toLowerCase()
    await signIn({ emailOrPhone, password })
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>

          <View style={styles.header.container}>
            <Image
              style={styles.header.logo}
              source={logoPigz}
            />
            <Text style={styles.header.title}>
              Para entregadores
            </Text>
          </View>

          <View style={styles.form.container}>
            <Text style={styles.form.title}>
              Login
            </Text>

            <Input
              label={'Email ou telefone'}
              placeholder={'example@pigz.com.br'}
              type={'email-address'}
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
            />
            <Input
              label={'Senha'}
              placeholder={'********'}
              value={password}
              secureTextEntry={isVisible ? false : true}
              onChangeText={setPassword}
            >
              <TouchableOpacity
                onPress={() => setIsVisible((prevState) => !prevState)}
                style={styles.form.button.eye.box}
              >
                {
                  isVisible ? (
                    <Eye color={THEME.COLORS.ORANGE} size={24} />
                  ) : (
                    <EyeSlash color={THEME.COLORS.ORANGE} size={24} />
                  )
                }
              </TouchableOpacity>
            </Input>

            <TouchableOpacity
              onPress={() => Alert.alert('Senha', 'Recupere sua senha.')}
            >
              <Text style={styles.form.forgotPass}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignIn}>
              <LinearGradient
                colors={THEME.COLORS.GRADIENT}
                start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                style={styles.form.button.enter.box}
              >
                <Text style={styles.form.button.enter.title}>Entrar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.account.container}>
            <Text style={styles.account.text}>
              Não tem uma conta? <Text style={styles.account.text.create} onPress={() => Alert.alert('Conta', 'Criar conta.')}>Criar agora!</Text>
            </Text>
          </View>

          <View style={styles.signIn.container}>
            <Text style={styles.signIn.title}>Entrar com</Text>
            <View style={styles.signIn.line} />
          </View>

          <Pressable style={styles.google.button} onPress={() => Alert.alert('Conta', 'Entre com sua conta Google.')}>
            <Image
              style={styles.google.img}
              source={imgGoogle}
            />
            <Text style={styles.google.title}>
              Continuar com o Google
            </Text>
            <Text />
          </Pressable>

        </ScrollView>
      </SafeAreaView>
    </Background>
  )
}