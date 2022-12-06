import { Text, View } from "react-native";

import { styles } from "./style";

export function CardNumber({ title, number}) {
  return (
    <View style={styles.card.box} >
      <Text style={styles.card.title}>{title}</Text>
      <Text style={styles.card.number}>{number}</Text>
    </View>
  )
}