import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48
  },
  button: {
    default: {
      padding: 12,
      borderRadius: 16,
      height: 48,
  
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    close: {
      height: 48,
      borderRadius: 16,
  
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: THEME.COLORS.RED
    }
  },
  title: {
    default: {
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      fontSize: 16,
      color: THEME.COLORS.WHITE
    },
    close: {
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      fontSize: 16,
      color: THEME.COLORS.RED
    }
  },
  img: {
    width: 22,
    height: 22,

    marginRight: 8
  }
})