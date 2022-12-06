import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24
  },
  header: {
    container: {
      width: '100%',
      marginTop: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {    
      width: 100,
      height: 50
    },
    title: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      marginTop: 0.8,
      color: THEME.COLORS.BLACK,
      fontSize: 18
    }
  },

  form: {
    container: {
      marginTop: 37
    },
    title: {
      fontSize: 16,
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      color: THEME.COLORS.BLACK
    },
    forgotPass: {
      fontFamily: THEME.FONT_FAMILY.REGULAR,
      fontSize: 13,
      textDecorationLine: 'underline',
      color: THEME.COLORS.GRAY_67,
      marginTop: 24
    },
    button: {
      eye: {
        box: {
          backgroundColor: 'transparent',
          padding: 4
        }
      },
      enter: {
        box: {
          backgroundColor: THEME.COLORS.ORANGE,
          height: 48,
          borderRadius: 16,
  
          alignItems: 'center',
          justifyContent: 'center',
  
          marginTop: 24
        },
        title: {
          fontFamily: THEME.FONT_FAMILY.MEDIUM,
          color: THEME.COLORS.WHITE,
          fontSize: 16,
        }
      }
    },
  },
  
  account: {
    container: {
      marginTop: 36
    },
    text: {
      fontFamily: THEME.FONT_FAMILY.REGULAR,
      fontSize: 13,
      color: THEME.COLORS.GRAY_67,
      textAlign: 'center',
      create: {
        color: THEME.COLORS.ORANGE,
      },
    }
  },

  signIn: {
    container: {
      marginTop: 57,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 48
    },
    title: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: 13,
      color: THEME.COLORS.GRAY_33,
      marginRight: 7
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: THEME.COLORS.GRAY_LINE
    }
  },

  google: {    
    button: {
      borderColor: THEME.COLORS.GRAY_BORDER_BUTTON,
      borderWidth: 1,
      borderRadius: 16,
      height: 48,

      paddingHorizontal: 16,
      marginTop: 24,
      marginBottom: 8,
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    img: {
      width: 20,
      height: 20
    },
    title: {
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      color: THEME.COLORS.GRAY_67,
      fontSize: 16
    }
  }
})