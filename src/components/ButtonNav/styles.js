import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 28,
    height: 28
  },
  text: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 10,
    color: THEME.COLORS.GRAY_BORDER_BUTTON,
    marginTop: 4,
    marginBottom: 12
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: THEME.COLORS.BORDER.NAV,
    borderRadius: 3
  }
})