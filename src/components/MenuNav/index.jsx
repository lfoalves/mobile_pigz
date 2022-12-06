import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"

import { ButtonNav } from "../ButtonNav"

import imgHome from '../../assets/home.webp'
import imgHomeActive from '../../assets/home_active.png'
import imgPerfil from '../../assets/perfil.png'
import imgPerfilActive from '../../assets/perfil_active.webp'
import imgRelatorio from '../../assets/relatorio.png'
import imgRelatorioActive from '../../assets/relatorio_active.png'

export function MenuNav({ menuActive = false, ...rest }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container} {...rest}>

      <ButtonNav
        title={'Relatórios'}
        img={menuActive === 'report' ? imgRelatorioActive : imgRelatorio}
        isActive={menuActive === 'report' ? true : false}
        onPress={() => navigation.navigate('report')}
      />

      <ButtonNav
        title={'Visão geral'}
        img={menuActive === 'home' ? imgHomeActive : imgHome }
        isActive={menuActive === 'home' ? true : false}
        onPress={() => navigation.navigate('home')}
      />

      <ButtonNav
        title={'Perfil'}
        img={menuActive === 'profile' ? imgPerfilActive : imgPerfil }
        isActive={menuActive === 'profile' ? true : false}
        onPress={() => navigation.navigate('profile')}
      />

    </View>
  )
}