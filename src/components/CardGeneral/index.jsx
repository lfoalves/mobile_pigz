import { Text, View } from "react-native";
import { styles } from "./styles";

export function CardGeneral({ title, description, children, ...rest}) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.content}>
        {
          title &&
          <Text style={styles.title}>{title && title}</Text>
        }
        {
          description && 
          <Text style={styles.description}>{description}</Text>
        }
        {
          children &&
          <View style={styles.content}>
            { children }
          </View>
        }
      </View>
    </View>
  )
}