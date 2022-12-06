import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { styles } from "./styles";

export function Report() {
  return (
    <Background>
      <SafeAreaView style={styles.screen.container}>

        <Header title={'Relatórios'} />

        <ScrollView style={styles.screen.content}>
          <View style={styles.screen.box}>
            <Text style={styles.text}>Sem relatórios por enquanto.</Text>
          </View>
        </ScrollView>

        <MenuNav menuActive={'report'} />

      </SafeAreaView>
    </Background>
  )
}