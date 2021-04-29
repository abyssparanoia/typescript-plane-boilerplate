import { CSSProperties } from '@material-ui/core/styles/withStyles'

export const Pallete = {
  red: {
    default: '#E57373',
    1: '#FFEBEE',
    2: '#FFCDD2',
    3: '#EF9A9A',
    4: '#E57373',
    5: '#EF5350',
    6: '#F44336',
    7: '#E53935',
    8: '#D32F2F',
    9: '#C62828',
    10: '#B71C1C'
  },
  pink: {
    default: '#F06292',
    1: '#FCE4EC',
    2: '#F8BBD0',
    3: '#F48FB1',
    4: '#F06292',
    5: '#EC407A',
    6: '#E91E63',
    7: '#D81B60',
    8: '#C2185B',
    9: '#AD1457',
    10: '#880E4F'
  },
  deepPurple: {
    default: '#9575CD',
    1: '#EDE7F6',
    2: '#D1C4E9',
    3: '#B39DDB',
    4: '#9575CD',
    5: '#7E57C2',
    6: '#673AB7',
    7: '#5E35B1',
    8: '#512DA8',
    9: '#4527A0',
    10: '#311B92'
  },
  indigo: {
    default: '#7986CB',
    1: '#E8EAF6',
    2: '#C5CAE9',
    3: '#9FA8DA',
    4: '#7986CB',
    5: '#5C6BC0',
    6: '#3F51B5',
    7: '#303F9F',
    8: '#283593',
    9: '#283593',
    10: '#1A237E'
  },
  blue: {
    default: '#64B5F6',
    1: '#E3F2FD',
    2: '#BBDEFB',
    3: '#90CAF9',
    4: '#64B5F6',
    5: '#42A5F5',
    6: '#2196F3',
    7: '#1E88E5',
    8: '#1976D2',
    9: '#1565C0',
    10: '#0D47A1'
  },
  cyan: {
    default: '#4DD0E1',
    1: '#E0F7FA',
    2: '#B2EBF2',
    3: '#80DEEA',
    4: '#4DD0E1',
    5: '#26C6DA',
    6: '#00BCD4',
    7: '#00ACC1',
    8: '#0097A7',
    9: '#00838F',
    10: '#006064'
  },
  green: {
    default: '#81C784',
    1: '#E8F5E9',
    2: '#C8E6C9',
    3: '#A5D6A7',
    4: '#81C784',
    5: '#66BB6A',
    6: '#4CAF50',
    7: '#43A047',
    8: '#388E3C',
    9: '#2E7D32',
    10: '#1B5E20'
  },
  deepOrange: {
    default: '#FF8A65',
    1: '#FBE9E7',
    2: '#FFCCBC',
    3: '#FFAB91',
    4: '#FF8A65',
    5: '#FF7043',
    6: '#FF5722',
    7: '#F4511E',
    8: '#E64A19',
    9: '#D84315',
    10: '#BF360C'
  },
  functional: {
    title: {
      default: '#2E2E2E'
    },
    body1: {
      default: '#545454'
    },
    body2: {
      default: '#7A7A7A'
    },
    disable: {
      default: '#C8C8C8'
    },
    border: {
      default: '#E0E0E0'
    },
    background: {
      default: '#FFF8F8'
    },
    whiteText: {
      default: '#ffffff'
    }
  }
}

export const Colors = {
  // Theme Color
  primary: {
    default: '#FF505F',
    variant: '#FF737F'
  },
  secondary: {
    default: '#B23842',
    1000: '#2A2A2D',
    800: '#343438',
    600: '#72727A',
    300: '#BABAC7',
    200: '#D1D1DE',
    50: '#F0F0FF'
  },
  teritary: {
    default: '#29CC97'
  },

  // Function Color
  error: {
    default: '#EF3A2D',
    light: 'white'
  },
  waring: {
    default: '#E8B532',
    light: '#FFF4D8'
  },
  success: {
    default: '#5FC024',
    light: '#E8F8DE'
  },
  info: {
    default: '#42ADE3',
    light: '#E9F5FB'
  },

  medium: {
    default: '#72727A'
  },
  light: {
    default: '#D1D1DE'
  },
  dark: {
    default: '#2A2A2D'
  },
  bg: {
    default: '#F5F6F8'
  },
  ...Pallete
}

// input 系の複雑な色定義

// normal
const NORMAL_COLOR = Colors.functional.body1.default
const NORMAL_BG_COLOR = Colors.functional.whiteText.default
const NORMAL_BORDER_COLOR = Colors.functional.border.default

// success color
const SUCCESS_COLOR = Colors.green[2]
const SUCCESS_BORDER_COLOR = Colors.green[2]
const SUCCESS_BG_COLOR = Colors.functional.whiteText.default

// error color
const ERROR_COLOR = Colors.error.default
const ERROR_BORDER_COLOR = Colors.error.default
const ERROR_BG_COLOR = Colors.functional.whiteText.default

// disabled
const DISABLED_COLOR = Colors.functional.disable.default
const DISABLED_BG_COLOR = Colors.functional.background.default
const DISABLED_BORDER_COLOR = Colors.functional.border.default

// focused
const HOVER_COLOR = Colors.functional.body1.default
const HOVER_BG_COLOR = Colors.functional.whiteText.default
const HOVER_BORDER_COLOR = Colors.functional.body1.default

interface InputStatusStyles {
  normal: CSSProperties
  success: CSSProperties
  error: CSSProperties
  disabled: CSSProperties
  hover: CSSProperties
}

export const inputStatusStyles: InputStatusStyles = {
  normal: {
    color: NORMAL_COLOR,
    backgroundColor: NORMAL_BG_COLOR,
    borderColor: NORMAL_BORDER_COLOR
  },
  success: {
    color: SUCCESS_COLOR,
    backgroundColor: SUCCESS_BG_COLOR,
    borderColor: SUCCESS_BORDER_COLOR
  },
  error: {
    color: ERROR_COLOR,
    backgroundColor: ERROR_BG_COLOR,
    borderColor: ERROR_BORDER_COLOR
  },
  disabled: {
    color: DISABLED_COLOR,
    backgroundColor: DISABLED_BG_COLOR,
    borderColor: DISABLED_BORDER_COLOR
  },
  hover: {
    color: HOVER_COLOR,
    backgroundColor: HOVER_BG_COLOR,
    borderColor: HOVER_BORDER_COLOR
  }
}
