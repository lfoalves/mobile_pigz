import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  screen: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16
    },
    content: {
      width: '100%',
      paddingHorizontal: 16
    }
  },
  
  profit: {
    container: {
      width: '100%',
      flex: 1
    },
    gradient: {
      width: '100%',
      height: 107,
      borderRadius: 16,
  
      padding: 16,
  
      marginTop: 44,
      backgroundColor: THEME.COLORS.WHITE
    },
    today: {
      fontSize: 16,
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      color: THEME.COLORS.WHITE
    },
    date: {
      fontSize: 16,
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      color: THEME.COLORS.WHITE
    },
    price: {
      fontFamily: THEME.FONT_FAMILY.ROBOTO.BOLD,
      fontSize: 30,
      color: THEME.COLORS.WHITE
    },
    button: {
      backgroundColor: 'transparent',
      padding: 4
    }
  },

  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  summary: {
    container: {
      width: '100%',
      marginTop: 32
    },
    cards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 1
    }
  },

  delivery: {
    container: {
      width: '100%',
      marginTop: 32
    },
    content: {
      flexDirection: 'row',
      marginBottom: 18
    },
    input: {
      width: '100%',
      height: 44,
      flex: 1,
      paddingHorizontal: 16,
      borderRadius: 16,
      borderColor: THEME.COLORS.ORANGE,
      borderWidth: 1
    },
    button: {
      box: {
        backgroundColor: THEME.COLORS.ORANGE,
        paddingHorizontal: 12,
        borderRadius: 16,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',

        marginLeft: 12
      },
      text: {
        fontFamily: THEME.FONT_FAMILY.MEDIUM,
        fontSize: 17,
        color: THEME.COLORS.WHITE
      }
    }
  }
})