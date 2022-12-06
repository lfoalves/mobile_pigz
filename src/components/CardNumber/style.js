import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  card: {
    box: {
      flex: 1,
      borderColor: THEME.COLORS.BORDER.F0,
      borderWidth: 1,
      borderRadius: 16,
      padding: 9,
      width: 100,
      height: 100,

      marginHorizontal: 3,

      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: THEME.FONT_FAMILY.REGULAR,
      color: THEME.COLORS.GRAY_9F,
      fontSize: 11
    },
    number: {
      flex: 1,
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      color: THEME.COLORS.GRAY_33,
      fontSize: 40,
    }
  }
})