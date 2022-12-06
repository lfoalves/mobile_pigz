import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    paddingTop: 32,
    paddingBottom: 15
  },
  box: {
    padding: 8
  },
  arrow: {
    width: 24,
    height: 24
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: THEME.COLORS.BLACK
  }
})