import { useEffect, useState } from "react";
import { View, Image, ScrollView, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/useAuth";
import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { Input } from '../../components/Input'
import { ButtonGradient } from '../../components/ButtonGradient'

import { Power } from "phosphor-react-native";
import { THEME } from "../../theme";

import { confirmDialog } from '../../utils/confirmDialog'


export function Profile() {
  const { user, signOut, updateUser } = useAuth();
  const [data, setData] = useState({})
  const [name, setName] = useState(user.name)
  const [emailOrPhone, setEmailOrPhone] = useState(user.emailOrPhone)

  function handleSignOut() {
    confirmDialog({
      title: 'Sair',
      description: 'Deseja sair da aplicação?',
      execute: signOut
    })
  }

  async function handleUpdateUser() {
    if (!name || !emailOrPhone) {
      return Alert.alert('Atualização', 'Preencha as informações para atualizar.')
    }
    
    await confirmDialog({
      title: 'Atualização',
      description: 'Deseja atualizar as informações?',
      execute() {
        const updated = { name, emailOrPhone }
        const userUpdated = Object.assign(user, updated)
        updateUser(userUpdated)
        Alert.alert('Atualização', 'Informações atualizadas com sucesso!')
      } 
    })
  }

  useEffect(() => {
    setName(user.name)
    setEmailOrPhone(user.emailOrPhone)
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.screen.container}>
        
        <Header title={'Perfil'} />

        <ScrollView style={styles.screen.content}>
          <View style={styles.logout.container}>
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.logout.button}
            >
              <Power weight="bold" color={THEME.COLORS.BORDER.NAV} size={24}/>
            </TouchableOpacity>
          </View>


          <View style={styles.user.container}>
            <Image
              style={styles.user.img}
              source={{uri: 'https://github.com/orangebr.png' }}
            />
            <Input
              label={'Nome'}
              placeholder={'Nome do usuário'}
              value={name}
              onChangeText={setName}
            />
            <Input
              label={'Email ou Telefone'}
              placeholder={'Email/Telefone do usuário'}
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
            />

            <View
              style={styles.user.button}
            >
              <ButtonGradient
                onPress={handleUpdateUser}
                title={'Atualizar'}
              />
            </View>
          </View>
        </ScrollView>
        
        <MenuNav menuActive='profile' />
      
      </SafeAreaView>
    </Background>
  )
}