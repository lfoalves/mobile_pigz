import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { THEME } from "../../theme";
import { styles } from "./styles";

export function ButtonGradient({ title, img, isClose = false, ...rest }) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <LinearGradient
        style={ isClose ? styles.button.close : styles.button.default }
        start={{x: 1, y: 0}} end={{x: 0, y: 0}}
        colors={ isClose ? [THEME.COLORS.WHITE, THEME.COLORS.WHITE] : THEME.COLORS.GRADIENT}
      >
        {
          img &&
          <Image source={img} style={styles.img} />
        }
        {
          title &&
          <Text style={ isClose ? styles.title.close : styles.title.default } >{title}</Text>
        }
      </LinearGradient>
    </TouchableOpacity>
  )
}