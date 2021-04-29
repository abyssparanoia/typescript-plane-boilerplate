import { createMuiTheme, fade } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'
import { Colors } from 'src/components/atoms'

const customTypography = {
  // font family
  fontFamily: [
    '"Roboto"',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),

  h1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '96px',
    lineHeight: '112px',
    letterSpacing: '-1.5px'
  },
  h2: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '60px',
    lineHeight: '72px',
    letterSpacing: '-0.5px'
  },
  h3: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '48px',
    lineHeight: '56px'
  },
  h4: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '34px',
    lineHeight: '36px'
  },
  h5: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '24px',
    letterSpacing: '0.18px'
  },
  h6: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
  body1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.41px'
  },
  body2: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px'
  },
  subtitle1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
  subtitle2: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.1px'
  },
  button: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '0.46px'
  },
  caption: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4px'
  },
  overline: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px'
  }
}

const palette = createPalette({
  text: {
    primary: '#000000',
    secondary: '#383733',
    disabled: '#979797'
  },
  grey: {
    '100': '#EAE6E6',
    '200': '#B6B6B6',
    '300': '#979797',
    '400': '#4F4F4F',
    '500': '#E5E5E5'
  },
  primary: {
    main: '#FF505F',
    contrastText: '#FFFFFF',
    '100': '#FFE1DF',
    '200': '#FFAEA8',
    '300': '#E4908A'
  },
  secondary: {
    main: '#B23842'
  },
  error: {
    main: '#EF3A2D'
  },
  background: {
    default: '#FFFAFA'
  },
  action: {
    hoverOpacity: 0.8
  }
})

const typography = createTypography(palette, customTypography)
// sample theme
const theme = createMuiTheme({
  typography: {
    ...typography
  },
  palette: {
    ...palette
  },
  spacing: 8,
  overrides: {
    MuiInputBase: {
      input: {
        height: '42px',
        ...typography.body1,
        padding: '0px 16px',
        border: '2px solid rgba(182,182,182,1)',
        backgroundColor: 'white',
        '&::placeholder': {
          color: `#979797 !important`
        }
      }
    },
    MuiList: {
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
    MuiInput: {
      root: {
        minWidth: '158px',
        transition: '256ms'
      },
      multiline: {
        padding: '0px'
      },
      underline: {
        '&:after': {
          display: 'none'
        },
        '&:before': {
          display: 'none'
        }
      }
    },
    MuiSelect: {
      root: {}
    },
    MuiFormHelperText: {
      root: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        border: 'none !important',
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: '-20px',
        left: '4px',
        '&.Mui-focused': {
          border: 'none',
          borderRadius: '0px'
        }
      }
    },
    MuiCheckbox: {
      root: {
        color: '#979797'
      }
    },
    MuiPickersToolbar: {
      toolbar: {}
    },
    MuiPickersCalendar: {
      week: {}
    },
    MuiPickersDatePickerRoot: {
      root: {
        // padding: '16px'
      }
    },
    MuiPickersCalendarHeader: {
      transitionContainer: {
        color: Colors.secondary.default
      },
      iconButton: {
        padding: '6px',
        '&:hover': {
          color: 'white'
        }
      }
    },
    MuiPickersDay: {
      day: {
        color: Colors.secondary.default,
        '&:hover': {
          color: 'white'
        }
      },
      daySelected: {
        color: 'white'
      }
    },

    MuiPaper: {
      root: {},
      elevation1: {},
      rounded: {
        borderRadius: '4px'
      }
    },
    MuiButtonBase: {
      root: {
        transition: '256ms',
        '&:hover': {
          color: 'black',
          backgroundColor: fade(palette.primary.main, 0.1)
        }
      }
    },
    MuiIconButton: {
      root: {
        transition: '256ms',
        '&:hover': {
          color: 'white',
          backgroundColor: fade(palette.primary.main, palette.action.hoverOpacity)
        }
      }
    },
    MuiButton: {
      root: {
        // backgroundColor: 'rgba(0,0,0,1)',
        '&:disabled': {
          color: '#eaeaea',
          backgroundColor: '#cccccc'
        }
      },

      label: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },

    MuiTabs: {
      indicator: {
        backgroundColor: Colors.primary.default
      }
    },
    MuiTab: {
      root: {
        '&$selected': {
          color: Colors.primary.default,
          borderColor: Colors.primary.default
        }
      }
    },
    MuiDivider: {
      root: { width: '100%' }
    },
    MuiTableContainer: {
      root: {
        maxHeight: '100%',
        borderRadius: '0px',
        backgroundColor: palette.background.default,
        boxShadow: 'none',
        width: '100%'
      }
    },
    MuiTableRow: {
      root: {
        cursor: 'pointer'
      }
    },
    MuiTabList: {
      root: {}
    },

    MuiListItem: {
      root: {
        '&:hover': {
          backgroundColor: `${fade(palette.primary.main, 0.6)} !important`
        }
      }
    },
    MuiToolbar: {
      root: {
        backgroundColor: '#FFF8F8',
        justifyContent: 'space-between',
        minHeight: '48px !important',
        height: '48px !important',
        paddingRight: '32px !important'
      }
    },
    MuiAccordion: {
      root: {
        boxShadow: 'none',
        backgroundColor: 'white'
      }
    },
    MuiAccordionSummary: {
      root: {
        height: '52px',
        minHeight: '52px',
        backgroundColor: '#EAE6E6',
        borderBottom: '1px solid #B6B6B6',
        '&$expanded': {
          height: '52px',
          minHeight: '52px'
        }
      },
      content: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '19px',
        letterSpacing: '0em',
        textAlign: 'center'
      },
      expandIcon: {
        position: 'absolute',
        right: '16px'
      }
    },

    MuiAccordionDetails: {
      root: {
        display: 'block',
        padding: '0px'
      }
    },

    MuiTableCell: {
      root: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0.40799999237060547px',
        textAlign: 'left',
        height: '82px !important',
        color: 'black !important',
        padding: '0px 8px !important',
        paddingLeft: '24px !important',
        borderBottom: 'none'
      },
      body: {
        color: Colors.secondary.default
      },
      head: {
        ...typography.subtitle1,
        minWidth: '100px',
        height: '60px !important',
        textAlign: 'center',
        color: '#545454',
        padding: '0px 8px !important',
        paddingLeft: '24px !important',
        borderBottom: `1px solid #E0E0E0`
      },
      stickyHeader: {
        borderBottom: `1px solid #E0E0E0`,
        backgroundColor: 'white'
      }
    }
  }
})

export default theme
