import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 17
  },
  label: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 13,
    color: THEME.COLORS.GRAY_67,

    lineHeight: 20
  },
  box: {
    width: '100%',
    height: 50,
    flex: 1,
    flexDirection: 'row',

    borderColor: THEME.COLORS.ORANGE,
    borderWidth: 1,
    borderRadius: 16,

    marginTop: 6
  },
  input: {
    paddingHorizontal: 16,
    color: THEME.COLORS.GRAY_INPUT,
    flex: 1,
    width: '100%',
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    
    borderRadius: 16
  },
  icon: {
    width: '100%',
    flex: 0.15,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 16,
    color: THEME.COLORS.ORANGE
  }
})