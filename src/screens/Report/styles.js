import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  screen: {
    container: {
      flex: 1,
      width: '100%',
      height: '100%',

      alignItems: 'center',

      justifyContent: 'space-between',
      paddingHorizontal: 16
    },
    content: {
      flex: 1,
      width: '100%',
      height: '100%',
      paddingHorizontal: 16
    },
    box: {
      marginTop: 44
    }
  },
  text: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO.MEDIUM,
    fontSize: 16,
    height: '100%',
    textAlign: 'center'
  }
})