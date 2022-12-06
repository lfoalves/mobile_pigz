import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import arrowLeft from '../../assets/arrow_back.png'
import { styles } from "./styles";

export function Header({ title, isHome = false, ...rest}) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container} {...rest}>
      {
        isHome ? <Text />
        : (
          <TouchableOpacity
            style={styles.box}
            onPress={handleGoBack}
          >
            <Image
              source={arrowLeft}
              style={styles.arrow}
            />
          </TouchableOpacity>
        )
      }

      <Text style={styles.title}>
        { title }
      </Text>

      <Text />
    </View>
  )
}