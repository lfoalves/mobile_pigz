import { Image, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

export function ButtonNav({ img, title, isActive = false, ...rest }) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image
        style={styles.img}
        source={img}
      />
      <Text style={styles.text}>{title}</Text>
      {
        isActive &&
        <View style={styles.line}></View>
      }
    </TouchableOpacity>
  )
}