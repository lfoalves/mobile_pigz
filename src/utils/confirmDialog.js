import { Alert } from "react-native"

export async function confirmDialog({ title, description, execute }) {
  return Alert.alert(
    `${title}`, `${description}`,
    [
      {
        text: 'Sim',
        onPress: execute
      },
      { text: 'Não'}
    ]
  )
}