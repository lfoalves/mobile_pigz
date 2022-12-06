import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 14,
    paddingBottom: 24,

    borderColor: THEME.COLORS.SHADOW.GRAY_029,
    borderWidth: 1,
    borderRadius: 16,

    shadowColor: THEME.COLORS.SHADOW.GRAY_029,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  content: {
    width: '100%'
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 16,
    color: THEME.COLORS.GRAY_33,

    marginBottom: 8
  },
  description: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 12,
    color: THEME.COLORS.GRAY_70,

    marginBottom: 8
  }
})