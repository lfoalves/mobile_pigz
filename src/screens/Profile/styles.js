import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  screen: {
    container: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: 'space-between'
    },
    content: {
      width: '100%',
      flex: 1,
      paddingHorizontal: 16
    }
  },
  logout: {
    container: {
      width: '100%'
    },
    button: {
      alignSelf: 'flex-end',

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: 'transparent',
      padding: 4
    }
  },
  user: {
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    img: {
      width: 150,
      height: 150,

      borderWidth: 3,
      borderColor: THEME.COLORS.SHADOW.GRAY_029,

      borderRadius: 100
    },
    button: {
      width: '100%',
      marginTop: 36,
      flex: 1
    }
  }
})