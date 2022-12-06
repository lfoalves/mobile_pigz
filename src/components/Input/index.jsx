import { Text, View, TextInput, Pressable } from "react-native";
import { styles } from './styles'

export function Input({ label, type = 'default', placeholder, children, ...rest }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.box}>
        <TextInput       
          style={styles.input}
          keyboardType={type}
          placeholder={placeholder}
          {...rest}
        />
        {
          children &&
            <View style={styles.icon}>
              { children }
            </View>
        }
      </View>
    </View>
  )
}