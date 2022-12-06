import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  screen: {
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16
    },
    content: {
      width: '100%',
      paddingHorizontal: 16,
      paddingTop: 44,
      paddingBottom: 90
    },
  },

  info: {
    container: {
      width: '100%',
      alignItems: 'center'
    },
    header: {
      container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: THEME.COLORS.BORDER.NAV,
      }
    },
    time: {
      box: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 14,
        color: THEME.COLORS.GRAY_70
      },
      number: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 20,
        color: THEME.COLORS.ORANGE  
      }
    },
    price: {
      box: {
        paddingTop: 20,
        paddingBottom: 35
      },
      title: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 14,
        color: THEME.COLORS.GRAY_70,
        textAlign: 'center'
      },
      number: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 35,
        color: THEME.COLORS.ORANGE,

        textAlign: 'center'
      }
    }
  },


  delivery: {
    container: {
      width: '100%'
    },

    button: {
      container: {
        with: '100%'
      },
      box: {
        width: '100%',
        height: 50,
        borderRadius: 16,

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 20
      },
      image: {
        box: {
          marginRight: 12
        },
        img: {
          width: 24,
          height: 24
        }
      },
      title: {
        fontFamily: THEME.FONT_FAMILY.ROBOTO.MEDIUM,
        fontSize: 18,
        color: THEME.COLORS.WHITE,
        lineHeight: 22
      },
      description: {
        fontFamily: THEME.FONT_FAMILY.ROBOTO.REGULAR,
        fontSize: 12,
        color: THEME.COLORS.WHITE,
        lineHeight: 14
      }
    },


    info: {
      container: {
        width: '100%',
        paddingHorizontal: 32,
        paddingBottom: 36
      },
      content: {
        borderLeftColor: THEME.COLORS.BORDER.NAV,
        borderLeftWidth: 1,
        height: 165,

        paddingTop: 32
      },
      box: {
        width: '100%'
      },
      ball: {
        big: {
          width: 15,
          height: 15,
          borderRadius: 16,

          marginLeft: 0,
          marginRight: 9
        },
        small: {
          width: 9,
          height: 9,
          backgroundColor: THEME.COLORS.WHITE,
          borderColor: THEME.COLORS.ORANGE,
          borderWidth: 1,
          borderRadius: 16,

          marginLeft: 3,
          marginRight: 12
        }
      },
      text: {
        title: {
          fontFamily: THEME.FONT_FAMILY.MEDIUM,
          fontSize: 18,
          color: THEME.COLORS.ORANGE
        },
        description: {
          fontFamily: THEME.FONT_FAMILY.REGULAR,
          fontSize: 14,
          color: THEME.COLORS.GRAY_70,

          marginLeft: 5
        }
      }
    }
  },


  options: {
    container: {
      width: '100%',
      paddingBottom: 70,
      marginTop: 32
    }
  }
})